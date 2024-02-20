import { Timeline, Text } from "@mantine/core";
import {
  IconGitBranch,
  IconGitPullRequest,
  IconGitCommit,
  IconMessageDots,
} from "@tabler/icons-react";

export default function ProjectTimeline() {
  return (
    <Timeline active={1} bulletSize={24} lineWidth={2}>
      <Timeline.Item
        bullet={<IconGitBranch size={12} />}
        title="Prospectively fund this project"
      >
        <Text c="dimmed" size="sm">
          Your funds are used to get the project off the ground{" "}
          <Text variant="link" component="span" inherit>
            fix-notifications
          </Text>{" "}
          from master
        </Text>
        <Text size="xs" mt={4}>
          now
        </Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitCommit size={12} />} title="Value created">
        <Text c="dimmed" size="sm">
          Value will be created by the project
        </Text>
        <Text size="xs" mt={4}>
          Ongoing
        </Text>
      </Timeline.Item>

      <Timeline.Item
        title="Application to Optimism Retro PGF 4"
        bullet={<IconGitPullRequest size={12} />}
        lineVariant="dashed"
      >
        <Text c="dimmed" size="sm">
          Application will be made to Optimism Retro PGF 4
        </Text>
        <Text size="xs" mt={4}>
          April 2024
        </Text>
      </Timeline.Item>

      <Timeline.Item
        title="Gitcoin citizen's round"
        bullet={<IconMessageDots size={12} />}
      >
        <Text c="dimmed" size="sm">
          <Text variant="link" component="span" inherit>
            Application will be made to Gitcoin citizen&apos;s round
          </Text>{" "}
        </Text>
        <Text size="xs" mt={4}>
          12 minutes ago
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}
