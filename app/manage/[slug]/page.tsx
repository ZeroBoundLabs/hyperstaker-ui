"use client";

import ManageProject from "@/components/manageProject";
import { graphql } from "@/lib/graphql";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import request from "graphql-request";

export default function Page({ params }: { params: { slug: string } }) {
  const account = useAccount();
  const [project, setProject] = useState<any>();
  const [hyperfund, setHyperfund] = useState<string>();

  useEffect(() => {
    getHypercertsOfUser(account.address as string).then((total) => {
      const filteredTotal = total?.filter(
        (t: any) => t?.fractions.data[0].metadata != null
      );
      const uniqueHypercerts = new Map();
      filteredTotal?.forEach((item: any) => {
        uniqueHypercerts.set(item.hypercert_id, item);
      });
      setProject(Array.from(uniqueHypercerts.values())[0]);
    });

    getHyperfund().then((hyperfund) => {
      setHyperfund(hyperfund);
    });
  }, [account]);

  async function getHypercertsOfUser(walletAddress: string) {
    const query = graphql(`
      query MyQuery {
        hypercerts(
          where: {fractions: {owner_address: {eq: "${walletAddress}"}}, hypercert_id: { eq: "${params.slug}"}}
        ) {
          data {
            contract {
              chain_id
            }
            hypercert_id
            fractions {
              count
              data {
                metadata {
                  id
                  name
                  description
                  external_url
                  impact_scope
                  impact_timeframe_from
                  impact_timeframe_to
                  work_timeframe_from
                  work_timeframe_to
                }
                units
              }
            }
            units
          }
        }
      }
    `);

    const res = await request(
      process.env.NEXT_PUBLIC_HYPERCERTS_API_URL_GRAPH as string,
      query
    );

    res?.hypercerts.data?.map((d: any) => {
      let totalUnits = 0;
      d?.fractions?.data?.map(
        (i: any) => (totalUnits = totalUnits + Number(i.units))
      );
      (d as any)["totalUnits"] = totalUnits;
    });

    return res.hypercerts.data;
  }

  async function getHyperfund() {
    const response = await fetch(
      process.env.NEXT_PUBLIC_HYPERINDEXER_ENDPOINT as unknown as URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
          query MyQuery {
            hyperfundCreated(hypercert: "${params.slug.split("-")[2]}") {
              hypercert
              hyperfund
              manager
            }
          }
        `,
        }),
      }
    );

    const data = await response.json();
    return data.data.hyperfundCreated.hyperfund;
  }

  return (
    <div className="container mx-auto">
      <div className="">
        <ManageProject
          project={{
            id: project?.fractions.data[0].metadata.id,
            recipient: account.address as string,
            name: project?.fractions.data[0].metadata.name,
            shortDescription:
              project?.fractions.data[0].metadata.description.split(".")[0],
            longDescription: project?.fractions.data[0].metadata.description,
            avatarUrl: "/img/default-logo.png",
            bannerUrl: "/img/default-banner.jpg",
            slug: project?.hypercert_id,
          }}
          metadata={{
            data: {
              bio: project?.fractions.data[0].metadata.description,
              impactCategory: project?.fractions.data[0].metadata.impact_scope,
            },
          }}
          isLoading={false}
          hyperfund={hyperfund as string}
        />
      </div>
    </div>
  );
}
