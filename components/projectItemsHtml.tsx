export function ProjectItem() {
  return (
    <div className="mb-8 flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <a
        target="_blank"
        href="/projects/0x96b420d4a9c0cacc124d46cc85e29dcccd8811e3119f01dd336954af17843bb7"
      >
        <div className="cursor-pointer rounded-[20px] border p-2 transition-colors hover:border-gray-400 group group flex h-full flex-col">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="bg-gray-200 bg-cover bg-center h-24 opacity-50 transition-opacity group-hover:opacity-100"
              style='background-image: url("https://content.optimism.io/profile/v0/banner-image/10/0xA0B39867b0999DcF7Af65ea674c3C975EaD99158.png");'
            ></div>
          </div>
          <div className="relative z-10 flex-1 space-y-2 px-4 pb-2">
            <div className="-mt-8 pb-2">
              <div
                className="bg-cover inline-flex border border-gray-200 bg-white flex-shrink-0 rounded-lg p-1 h-16 w-16 origin-left transition group-hover:scale-75"
                style='background-image: url("https://content.optimism.io/profile/v0/profile-image/10/0xA0B39867b0999DcF7Af65ea674c3C975EaD99158.png");'
              ></div>
            </div>
            <div className="transition-transform group-hover:-translate-y-4">
              <h3 className="text-base md:text-lg font-bold">0xs34n</h3>
              <p className="line-clamp-2 text-sm text-neutral-700">
                Building dapps with rollups
              </p>
            </div>
            <div className="no-scrollbar">
              <div className="flex gap-1 overflow-x-auto"></div>
            </div>
          </div>
          <div className="relative">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none fill-primary-600 transition-all absolute -top-1 left-2 w-4 group-hover:h-6 group-hover:w-6 h-0 w-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L8.94877 2.40564C9.78693 4.53083 11.4661 6.21184 13.5858 7.04784L16 8L13.5857 8.95217C11.4661 9.78816 9.78693 11.4692 8.94877 13.5944L8 16L7.05123 13.5944C6.21307 11.4692 4.53394 9.78816 2.41425 8.95217L0 8L2.41425 7.04783C4.53395 6.21184 6.21307 4.53083 7.05123 2.40564L8 0Z"></path>
            </svg>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none fill-primary-600 transition-all absolute -bottom-2 right-2 w-8 group-hover:h-10 group-hover:w-10 h-0 w-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L8.94877 2.40564C9.78693 4.53083 11.4661 6.21184 13.5858 7.04784L16 8L13.5857 8.95217C11.4661 9.78816 9.78693 11.4692 8.94877 13.5944L8 16L7.05123 13.5944C6.21307 11.4692 4.53394 9.78816 2.41425 8.95217L0 8L2.41425 7.04783C4.53395 6.21184 6.21307 4.53083 7.05123 2.40564L8 0Z"></path>
            </svg>
            <button
              className="inline-flex items-center justify-center font-semibold text-center rounded-xl duration-150 whitespace-nowrap disabled:bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary-200 px-4 py-2 h-12 min-w-48 w-full"
              variant="allocated"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold italic text-primary-600"
              >
                <g clip-path="url(#clip0_2_2)">
                  <circle
                    cx="512"
                    cy="512"
                    r="512"
                    fill="currentColor"
                  ></circle>
                  <path
                    d="M362.769 648.081C332.283 648.081 307.305 640.908 287.834 626.561C268.62 611.959 259.013 591.207 259.013 564.308C259.013 558.671 259.653 551.754 260.934 543.556C264.265 525.111 269.004 502.951 275.153 477.075C292.574 406.624 337.535 371.398 410.036 371.398C429.763 371.398 447.44 374.728 463.067 381.389C478.695 387.794 490.992 397.529 499.958 410.595C508.925 423.404 513.408 438.775 513.408 456.708C513.408 462.088 512.768 468.877 511.487 477.075C507.644 499.876 503.032 522.037 497.652 543.556C488.686 578.654 473.186 604.913 451.154 622.334C429.122 639.499 399.66 648.081 362.769 648.081ZM368.149 592.745C382.496 592.745 394.665 588.517 404.656 580.063C414.904 571.609 422.205 558.671 426.56 541.251C432.453 517.169 436.936 496.161 440.01 478.228C441.035 472.848 441.547 467.34 441.547 461.704C441.547 438.391 429.378 426.734 405.04 426.734C390.694 426.734 378.397 430.962 368.149 439.416C358.158 447.87 350.985 460.808 346.629 478.228C342.018 495.393 337.407 516.4 332.795 541.251C331.77 546.374 331.258 551.754 331.258 557.391C331.258 580.96 343.555 592.745 368.149 592.745Z"
                    fill="white"
                  ></path>
                  <path
                    d="M531.052 644.238C528.234 644.238 526.056 643.342 524.519 641.548C523.238 639.499 522.854 637.193 523.366 634.631L576.397 384.848C576.91 382.03 578.319 379.724 580.624 377.931C582.93 376.137 585.364 375.241 587.926 375.241H690.145C718.582 375.241 741.383 381.133 758.547 392.918C775.968 404.702 784.679 421.739 784.679 444.027C784.679 450.432 783.91 457.093 782.373 464.01C775.968 493.472 763.031 515.248 743.56 529.338C724.346 543.428 697.959 550.473 664.398 550.473H612.52L594.843 634.631C594.331 637.449 592.922 639.755 590.616 641.548C588.31 643.342 585.876 644.238 583.314 644.238H531.052ZM667.088 497.442C677.848 497.442 687.199 494.496 695.141 488.604C703.339 482.712 708.719 474.257 711.281 463.241C712.049 458.886 712.433 455.043 712.433 451.713C712.433 444.283 710.256 438.647 705.901 434.804C701.545 430.705 694.116 428.656 683.612 428.656H637.498L622.896 497.442H667.088Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_2_2">
                    <rect width="1024" height="1024"></rect>
                  </clipPath>
                </defs>
              </svg>
              24,358
            </button>
          </div>
        </div>
      </a>
      <a
        target="_blank"
        href="/projects/0x023ec749b1a3ad4335595edad791b6dd5523a94817f53cba336060779471c3c8"
      >
        <div className="cursor-pointer rounded-[20px] border p-2 transition-colors hover:border-gray-400 group group flex h-full flex-col">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="bg-gray-200 bg-cover bg-center h-24 opacity-50 transition-opacity group-hover:opacity-100 blur-[40px]"
              style='background-image: url("https://content.optimism.io/profile/v0/profile-image/10/0x1e3a41F770219e03649b434b4c1E07850DfCFf66.png");'
            ></div>
          </div>
          <div className="relative z-10 flex-1 space-y-2 px-4 pb-2">
            <div className="-mt-8 pb-2">
              <div
                className="bg-cover inline-flex border border-gray-200 bg-white flex-shrink-0 rounded-lg p-1 h-16 w-16 origin-left transition group-hover:scale-75"
                style='background-image: url("https://content.optimism.io/profile/v0/profile-image/10/0x1e3a41F770219e03649b434b4c1E07850DfCFf66.png");'
              ></div>
            </div>
            <div className="transition-transform group-hover:-translate-y-4">
              <h3 className="text-base md:text-lg font-bold">Bankless DAO</h3>
              <p className="line-clamp-2 text-sm text-neutral-700">
                Global education and Crypto Native Onboarding
              </p>
            </div>
            <div className="no-scrollbar">
              <div className="flex gap-1 overflow-x-auto"></div>
            </div>
          </div>
          <div className="relative">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none fill-primary-600 transition-all absolute -top-1 left-2 w-4 group-hover:h-6 group-hover:w-6 h-0 w-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L8.94877 2.40564C9.78693 4.53083 11.4661 6.21184 13.5858 7.04784L16 8L13.5857 8.95217C11.4661 9.78816 9.78693 11.4692 8.94877 13.5944L8 16L7.05123 13.5944C6.21307 11.4692 4.53394 9.78816 2.41425 8.95217L0 8L2.41425 7.04783C4.53395 6.21184 6.21307 4.53083 7.05123 2.40564L8 0Z"></path>
            </svg>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none fill-primary-600 transition-all absolute -bottom-2 right-2 w-8 group-hover:h-10 group-hover:w-10 h-0 w-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L8.94877 2.40564C9.78693 4.53083 11.4661 6.21184 13.5858 7.04784L16 8L13.5857 8.95217C11.4661 9.78816 9.78693 11.4692 8.94877 13.5944L8 16L7.05123 13.5944C6.21307 11.4692 4.53394 9.78816 2.41425 8.95217L0 8L2.41425 7.04783C4.53395 6.21184 6.21307 4.53083 7.05123 2.40564L8 0Z"></path>
            </svg>
            <button
              className="inline-flex items-center justify-center font-semibold text-center rounded-xl duration-150 whitespace-nowrap disabled:bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary-200 px-4 py-2 h-12 min-w-48 w-full"
              variant="allocated"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold italic text-primary-600"
              >
                <g clip-path="url(#clip0_2_2)">
                  <circle
                    cx="512"
                    cy="512"
                    r="512"
                    fill="currentColor"
                  ></circle>
                  <path
                    d="M362.769 648.081C332.283 648.081 307.305 640.908 287.834 626.561C268.62 611.959 259.013 591.207 259.013 564.308C259.013 558.671 259.653 551.754 260.934 543.556C264.265 525.111 269.004 502.951 275.153 477.075C292.574 406.624 337.535 371.398 410.036 371.398C429.763 371.398 447.44 374.728 463.067 381.389C478.695 387.794 490.992 397.529 499.958 410.595C508.925 423.404 513.408 438.775 513.408 456.708C513.408 462.088 512.768 468.877 511.487 477.075C507.644 499.876 503.032 522.037 497.652 543.556C488.686 578.654 473.186 604.913 451.154 622.334C429.122 639.499 399.66 648.081 362.769 648.081ZM368.149 592.745C382.496 592.745 394.665 588.517 404.656 580.063C414.904 571.609 422.205 558.671 426.56 541.251C432.453 517.169 436.936 496.161 440.01 478.228C441.035 472.848 441.547 467.34 441.547 461.704C441.547 438.391 429.378 426.734 405.04 426.734C390.694 426.734 378.397 430.962 368.149 439.416C358.158 447.87 350.985 460.808 346.629 478.228C342.018 495.393 337.407 516.4 332.795 541.251C331.77 546.374 331.258 551.754 331.258 557.391C331.258 580.96 343.555 592.745 368.149 592.745Z"
                    fill="white"
                  ></path>
                  <path
                    d="M531.052 644.238C528.234 644.238 526.056 643.342 524.519 641.548C523.238 639.499 522.854 637.193 523.366 634.631L576.397 384.848C576.91 382.03 578.319 379.724 580.624 377.931C582.93 376.137 585.364 375.241 587.926 375.241H690.145C718.582 375.241 741.383 381.133 758.547 392.918C775.968 404.702 784.679 421.739 784.679 444.027C784.679 450.432 783.91 457.093 782.373 464.01C775.968 493.472 763.031 515.248 743.56 529.338C724.346 543.428 697.959 550.473 664.398 550.473H612.52L594.843 634.631C594.331 637.449 592.922 639.755 590.616 641.548C588.31 643.342 585.876 644.238 583.314 644.238H531.052ZM667.088 497.442C677.848 497.442 687.199 494.496 695.141 488.604C703.339 482.712 708.719 474.257 711.281 463.241C712.049 458.886 712.433 455.043 712.433 451.713C712.433 444.283 710.256 438.647 705.901 434.804C701.545 430.705 694.116 428.656 683.612 428.656H637.498L622.896 497.442H667.088Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_2_2">
                    <rect width="1024" height="1024"></rect>
                  </clipPath>
                </defs>
              </svg>
              23,164
            </button>
          </div>
        </div>
      </a>
      <a
        target="_blank"
        href="/projects/0xfbc5b3bbff7b3e97d80ae04bfefc389dd9caf7085ce788d752bd3a04cf1165fa"
      >
        <div className="cursor-pointer rounded-[20px] border p-2 transition-colors hover:border-gray-400 group group flex h-full flex-col">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="bg-gray-200 bg-cover bg-center h-24 opacity-50 transition-opacity group-hover:opacity-100"
              style='background-image: url("https://content.optimism.io/profile/v0/banner-image/10/0x7cBFd4f0De51124B498f72DEBC35421C66F2bB0d.png");'
            ></div>
          </div>
          <div className="relative z-10 flex-1 space-y-2 px-4 pb-2">
            <div className="-mt-8 pb-2">
              <div
                className="bg-cover inline-flex border border-gray-200 bg-white flex-shrink-0 rounded-lg p-1 h-16 w-16 origin-left transition group-hover:scale-75"
                style='background-image: url("https://content.optimism.io/profile/v0/profile-image/10/0x7cBFd4f0De51124B498f72DEBC35421C66F2bB0d.png");'
              ></div>
            </div>
            <div className="transition-transform group-hover:-translate-y-4">
              <h3 className="text-base md:text-lg font-bold">WOOFi</h3>
              <p className="line-clamp-2 text-sm text-neutral-700">
                One DEX to rule all chains. Trade and earn with best pricing,
                cross-chain swaps.
              </p>
            </div>
            <div className="no-scrollbar">
              <div className="flex gap-1 overflow-x-auto"></div>
            </div>
          </div>
          <div className="relative">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none fill-primary-600 transition-all absolute -top-1 left-2 w-4 group-hover:h-6 group-hover:w-6 h-0 w-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L8.94877 2.40564C9.78693 4.53083 11.4661 6.21184 13.5858 7.04784L16 8L13.5857 8.95217C11.4661 9.78816 9.78693 11.4692 8.94877 13.5944L8 16L7.05123 13.5944C6.21307 11.4692 4.53394 9.78816 2.41425 8.95217L0 8L2.41425 7.04783C4.53395 6.21184 6.21307 4.53083 7.05123 2.40564L8 0Z"></path>
            </svg>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none fill-primary-600 transition-all absolute -bottom-2 right-2 w-8 group-hover:h-10 group-hover:w-10 h-0 w-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L8.94877 2.40564C9.78693 4.53083 11.4661 6.21184 13.5858 7.04784L16 8L13.5857 8.95217C11.4661 9.78816 9.78693 11.4692 8.94877 13.5944L8 16L7.05123 13.5944C6.21307 11.4692 4.53394 9.78816 2.41425 8.95217L0 8L2.41425 7.04783C4.53395 6.21184 6.21307 4.53083 7.05123 2.40564L8 0Z"></path>
            </svg>
            <button
              className="inline-flex items-center justify-center font-semibold text-center rounded-xl duration-150 whitespace-nowrap disabled:bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary-200 px-4 py-2 h-12 min-w-48 w-full"
              variant="allocated"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold italic text-primary-600"
              >
                <g clip-path="url(#clip0_2_2)">
                  <circle
                    cx="512"
                    cy="512"
                    r="512"
                    fill="currentColor"
                  ></circle>
                  <path
                    d="M362.769 648.081C332.283 648.081 307.305 640.908 287.834 626.561C268.62 611.959 259.013 591.207 259.013 564.308C259.013 558.671 259.653 551.754 260.934 543.556C264.265 525.111 269.004 502.951 275.153 477.075C292.574 406.624 337.535 371.398 410.036 371.398C429.763 371.398 447.44 374.728 463.067 381.389C478.695 387.794 490.992 397.529 499.958 410.595C508.925 423.404 513.408 438.775 513.408 456.708C513.408 462.088 512.768 468.877 511.487 477.075C507.644 499.876 503.032 522.037 497.652 543.556C488.686 578.654 473.186 604.913 451.154 622.334C429.122 639.499 399.66 648.081 362.769 648.081ZM368.149 592.745C382.496 592.745 394.665 588.517 404.656 580.063C414.904 571.609 422.205 558.671 426.56 541.251C432.453 517.169 436.936 496.161 440.01 478.228C441.035 472.848 441.547 467.34 441.547 461.704C441.547 438.391 429.378 426.734 405.04 426.734C390.694 426.734 378.397 430.962 368.149 439.416C358.158 447.87 350.985 460.808 346.629 478.228C342.018 495.393 337.407 516.4 332.795 541.251C331.77 546.374 331.258 551.754 331.258 557.391C331.258 580.96 343.555 592.745 368.149 592.745Z"
                    fill="white"
                  ></path>
                  <path
                    d="M531.052 644.238C528.234 644.238 526.056 643.342 524.519 641.548C523.238 639.499 522.854 637.193 523.366 634.631L576.397 384.848C576.91 382.03 578.319 379.724 580.624 377.931C582.93 376.137 585.364 375.241 587.926 375.241H690.145C718.582 375.241 741.383 381.133 758.547 392.918C775.968 404.702 784.679 421.739 784.679 444.027C784.679 450.432 783.91 457.093 782.373 464.01C775.968 493.472 763.031 515.248 743.56 529.338C724.346 543.428 697.959 550.473 664.398 550.473H612.52L594.843 634.631C594.331 637.449 592.922 639.755 590.616 641.548C588.31 643.342 585.876 644.238 583.314 644.238H531.052ZM667.088 497.442C677.848 497.442 687.199 494.496 695.141 488.604C703.339 482.712 708.719 474.257 711.281 463.241C712.049 458.886 712.433 455.043 712.433 451.713C712.433 444.283 710.256 438.647 705.901 434.804C701.545 430.705 694.116 428.656 683.612 428.656H637.498L622.896 497.442H667.088Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_2_2">
                    <rect width="1024" height="1024"></rect>
                  </clipPath>
                </defs>
              </svg>
              38,223
            </button>
          </div>
        </div>
      </a>
      <a
        target="_blank"
        href="/projects/0x0013d2c9abbc3047014a3815916ae8159058186379175c4613b1d00cbbb39864"
      >
        <div className="cursor-pointer rounded-[20px] border p-2 transition-colors hover:border-gray-400 group group flex h-full flex-col">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="bg-gray-200 bg-cover bg-center h-24 opacity-50 transition-opacity group-hover:opacity-100"
              style='background-image: url("https://content.optimism.io/profile/v0/banner-image/10/0xd3Cc6DeaA7B9C09E99DB64ca35D6D06179812C67.png");'
            ></div>
          </div>
          <div className="relative z-10 flex-1 space-y-2 px-4 pb-2">
            <div className="-mt-8 pb-2">
              <div
                className="bg-cover inline-flex border border-gray-200 bg-white flex-shrink-0 rounded-lg p-1 h-16 w-16 origin-left transition group-hover:scale-75"
                style='background-image: url("https://content.optimism.io/profile/v0/profile-image/10/0xd3Cc6DeaA7B9C09E99DB64ca35D6D06179812C67.png");'
              ></div>
            </div>
            <div className="transition-transform group-hover:-translate-y-4">
              <h3 className="text-base md:text-lg font-bold">Validato</h3>
              <p className="line-clamp-2 text-sm text-neutral-700">
                Install your validator node with one click.
              </p>
            </div>
            <div className="no-scrollbar">
              <div className="flex gap-1 overflow-x-auto"></div>
            </div>
          </div>
          <div className="relative">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none fill-primary-600 transition-all absolute -top-1 left-2 w-4 group-hover:h-6 group-hover:w-6 h-0 w-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L8.94877 2.40564C9.78693 4.53083 11.4661 6.21184 13.5858 7.04784L16 8L13.5857 8.95217C11.4661 9.78816 9.78693 11.4692 8.94877 13.5944L8 16L7.05123 13.5944C6.21307 11.4692 4.53394 9.78816 2.41425 8.95217L0 8L2.41425 7.04783C4.53395 6.21184 6.21307 4.53083 7.05123 2.40564L8 0Z"></path>
            </svg>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none fill-primary-600 transition-all absolute -bottom-2 right-2 w-8 group-hover:h-10 group-hover:w-10 h-0 w-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L8.94877 2.40564C9.78693 4.53083 11.4661 6.21184 13.5858 7.04784L16 8L13.5857 8.95217C11.4661 9.78816 9.78693 11.4692 8.94877 13.5944L8 16L7.05123 13.5944C6.21307 11.4692 4.53394 9.78816 2.41425 8.95217L0 8L2.41425 7.04783C4.53395 6.21184 6.21307 4.53083 7.05123 2.40564L8 0Z"></path>
            </svg>
            <button
              className="inline-flex items-center justify-center font-semibold text-center rounded-xl duration-150 whitespace-nowrap disabled:bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary-200 px-4 py-2 h-12 min-w-48 w-full"
              variant="allocated"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold italic text-primary-600"
              >
                <g clip-path="url(#clip0_2_2)">
                  <circle
                    cx="512"
                    cy="512"
                    r="512"
                    fill="currentColor"
                  ></circle>
                  <path
                    d="M362.769 648.081C332.283 648.081 307.305 640.908 287.834 626.561C268.62 611.959 259.013 591.207 259.013 564.308C259.013 558.671 259.653 551.754 260.934 543.556C264.265 525.111 269.004 502.951 275.153 477.075C292.574 406.624 337.535 371.398 410.036 371.398C429.763 371.398 447.44 374.728 463.067 381.389C478.695 387.794 490.992 397.529 499.958 410.595C508.925 423.404 513.408 438.775 513.408 456.708C513.408 462.088 512.768 468.877 511.487 477.075C507.644 499.876 503.032 522.037 497.652 543.556C488.686 578.654 473.186 604.913 451.154 622.334C429.122 639.499 399.66 648.081 362.769 648.081ZM368.149 592.745C382.496 592.745 394.665 588.517 404.656 580.063C414.904 571.609 422.205 558.671 426.56 541.251C432.453 517.169 436.936 496.161 440.01 478.228C441.035 472.848 441.547 467.34 441.547 461.704C441.547 438.391 429.378 426.734 405.04 426.734C390.694 426.734 378.397 430.962 368.149 439.416C358.158 447.87 350.985 460.808 346.629 478.228C342.018 495.393 337.407 516.4 332.795 541.251C331.77 546.374 331.258 551.754 331.258 557.391C331.258 580.96 343.555 592.745 368.149 592.745Z"
                    fill="white"
                  ></path>
                  <path
                    d="M531.052 644.238C528.234 644.238 526.056 643.342 524.519 641.548C523.238 639.499 522.854 637.193 523.366 634.631L576.397 384.848C576.91 382.03 578.319 379.724 580.624 377.931C582.93 376.137 585.364 375.241 587.926 375.241H690.145C718.582 375.241 741.383 381.133 758.547 392.918C775.968 404.702 784.679 421.739 784.679 444.027C784.679 450.432 783.91 457.093 782.373 464.01C775.968 493.472 763.031 515.248 743.56 529.338C724.346 543.428 697.959 550.473 664.398 550.473H612.52L594.843 634.631C594.331 637.449 592.922 639.755 590.616 641.548C588.31 643.342 585.876 644.238 583.314 644.238H531.052ZM667.088 497.442C677.848 497.442 687.199 494.496 695.141 488.604C703.339 482.712 708.719 474.257 711.281 463.241C712.049 458.886 712.433 455.043 712.433 451.713C712.433 444.283 710.256 438.647 705.901 434.804C701.545 430.705 694.116 428.656 683.612 428.656H637.498L622.896 497.442H667.088Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_2_2">
                    <rect width="1024" height="1024"></rect>
                  </clipPath>
                </defs>
              </svg>
              0
            </button>
          </div>
        </div>
      </a>
      <a
        target="_blank"
        href="/projects/0x92a87cf038d881b99443a9157cd5649fe87a9df62511aaf72c5fe659ff8ef02b"
      >
        <div className="cursor-pointer rounded-[20px] border p-2 transition-colors hover:border-gray-400 group group flex h-full flex-col">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="bg-gray-200 bg-cover bg-center h-24 opacity-50 transition-opacity group-hover:opacity-100 blur-[40px]"
              style='background-image: url("https://content.optimism.io/profile/v0/profile-image/10/0xF96Aa4A25fDe246d9dD498B145F52Fab0eAd29f3.png");'
            ></div>
          </div>
          <div className="relative z-10 flex-1 space-y-2 px-4 pb-2">
            <div className="-mt-8 pb-2">
              <div
                className="bg-cover inline-flex border border-gray-200 bg-white flex-shrink-0 rounded-lg p-1 h-16 w-16 origin-left transition group-hover:scale-75"
                style='background-image: url("https://content.optimism.io/profile/v0/profile-image/10/0xF96Aa4A25fDe246d9dD498B145F52Fab0eAd29f3.png");'
              ></div>
            </div>
            <div className="transition-transform group-hover:-translate-y-4">
              <h3 className="text-base md:text-lg font-bold">Ipsilon</h3>
              <p className="line-clamp-2 text-sm text-neutral-700">
                Ipsilon is a research team focusing on the EVM.
              </p>
            </div>
            <div className="no-scrollbar">
              <div className="flex gap-1 overflow-x-auto"></div>
            </div>
          </div>
          <div className="relative">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none fill-primary-600 transition-all absolute -top-1 left-2 w-4 group-hover:h-6 group-hover:w-6 h-0 w-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L8.94877 2.40564C9.78693 4.53083 11.4661 6.21184 13.5858 7.04784L16 8L13.5857 8.95217C11.4661 9.78816 9.78693 11.4692 8.94877 13.5944L8 16L7.05123 13.5944C6.21307 11.4692 4.53394 9.78816 2.41425 8.95217L0 8L2.41425 7.04783C4.53395 6.21184 6.21307 4.53083 7.05123 2.40564L8 0Z"></path>
            </svg>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none fill-primary-600 transition-all absolute -bottom-2 right-2 w-8 group-hover:h-10 group-hover:w-10 h-0 w-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L8.94877 2.40564C9.78693 4.53083 11.4661 6.21184 13.5858 7.04784L16 8L13.5857 8.95217C11.4661 9.78816 9.78693 11.4692 8.94877 13.5944L8 16L7.05123 13.5944C6.21307 11.4692 4.53394 9.78816 2.41425 8.95217L0 8L2.41425 7.04783C4.53395 6.21184 6.21307 4.53083 7.05123 2.40564L8 0Z"></path>
            </svg>
            <button
              className="inline-flex items-center justify-center font-semibold text-center rounded-xl duration-150 whitespace-nowrap disabled:bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary-200 px-4 py-2 h-12 min-w-48 w-full"
              variant="allocated"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold italic text-primary-600"
              >
                <g clip-path="url(#clip0_2_2)">
                  <circle
                    cx="512"
                    cy="512"
                    r="512"
                    fill="currentColor"
                  ></circle>
                  <path
                    d="M362.769 648.081C332.283 648.081 307.305 640.908 287.834 626.561C268.62 611.959 259.013 591.207 259.013 564.308C259.013 558.671 259.653 551.754 260.934 543.556C264.265 525.111 269.004 502.951 275.153 477.075C292.574 406.624 337.535 371.398 410.036 371.398C429.763 371.398 447.44 374.728 463.067 381.389C478.695 387.794 490.992 397.529 499.958 410.595C508.925 423.404 513.408 438.775 513.408 456.708C513.408 462.088 512.768 468.877 511.487 477.075C507.644 499.876 503.032 522.037 497.652 543.556C488.686 578.654 473.186 604.913 451.154 622.334C429.122 639.499 399.66 648.081 362.769 648.081ZM368.149 592.745C382.496 592.745 394.665 588.517 404.656 580.063C414.904 571.609 422.205 558.671 426.56 541.251C432.453 517.169 436.936 496.161 440.01 478.228C441.035 472.848 441.547 467.34 441.547 461.704C441.547 438.391 429.378 426.734 405.04 426.734C390.694 426.734 378.397 430.962 368.149 439.416C358.158 447.87 350.985 460.808 346.629 478.228C342.018 495.393 337.407 516.4 332.795 541.251C331.77 546.374 331.258 551.754 331.258 557.391C331.258 580.96 343.555 592.745 368.149 592.745Z"
                    fill="white"
                  ></path>
                  <path
                    d="M531.052 644.238C528.234 644.238 526.056 643.342 524.519 641.548C523.238 639.499 522.854 637.193 523.366 634.631L576.397 384.848C576.91 382.03 578.319 379.724 580.624 377.931C582.93 376.137 585.364 375.241 587.926 375.241H690.145C718.582 375.241 741.383 381.133 758.547 392.918C775.968 404.702 784.679 421.739 784.679 444.027C784.679 450.432 783.91 457.093 782.373 464.01C775.968 493.472 763.031 515.248 743.56 529.338C724.346 543.428 697.959 550.473 664.398 550.473H612.52L594.843 634.631C594.331 637.449 592.922 639.755 590.616 641.548C588.31 643.342 585.876 644.238 583.314 644.238H531.052ZM667.088 497.442C677.848 497.442 687.199 494.496 695.141 488.604C703.339 482.712 708.719 474.257 711.281 463.241C712.049 458.886 712.433 455.043 712.433 451.713C712.433 444.283 710.256 438.647 705.901 434.804C701.545 430.705 694.116 428.656 683.612 428.656H637.498L622.896 497.442H667.088Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_2_2">
                    <rect width="1024" height="1024"></rect>
                  </clipPath>
                </defs>
              </svg>
              99,379
            </button>
          </div>
        </div>
      </a>
      <a
        target="_blank"
        href="/projects/0x5e78ac7cb417bb9a6f96e126cd442468d925bf0be07547bbdf089bb07fde9b79"
      >
        <div className="cursor-pointer rounded-[20px] border p-2 transition-colors hover:border-gray-400 group group flex h-full flex-col">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="bg-gray-200 bg-cover bg-center h-24 opacity-50 transition-opacity group-hover:opacity-100"
              style='background-image: url("https://content.optimism.io/profile/v0/banner-image/10/0xB6989F472Bef8931e6Ca882b1f875539b7D5DA19.png");'
            ></div>
          </div>
          <div className="relative z-10 flex-1 space-y-2 px-4 pb-2">
            <div className="-mt-8 pb-2">
              <div
                className="bg-cover inline-flex border border-gray-200 bg-white flex-shrink-0 rounded-lg p-1 h-16 w-16 origin-left transition group-hover:scale-75"
                style='background-image: url("https://content.optimism.io/profile/v0/profile-image/10/0xB6989F472Bef8931e6Ca882b1f875539b7D5DA19.png");'
              ></div>
            </div>
            <div className="transition-transform group-hover:-translate-y-4">
              <h3 className="text-base md:text-lg font-bold">
                Giveth Web3 House
              </h3>
              <p className="line-clamp-2 text-sm text-neutral-700">
                Web3's collaborative hub driving regenerative change and
                supporting public goods
              </p>
            </div>
            <div className="no-scrollbar">
              <div className="flex gap-1 overflow-x-auto"></div>
            </div>
          </div>
          <div className="relative">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none fill-primary-600 transition-all absolute -top-1 left-2 w-4 group-hover:h-6 group-hover:w-6 h-0 w-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L8.94877 2.40564C9.78693 4.53083 11.4661 6.21184 13.5858 7.04784L16 8L13.5857 8.95217C11.4661 9.78816 9.78693 11.4692 8.94877 13.5944L8 16L7.05123 13.5944C6.21307 11.4692 4.53394 9.78816 2.41425 8.95217L0 8L2.41425 7.04783C4.53395 6.21184 6.21307 4.53083 7.05123 2.40564L8 0Z"></path>
            </svg>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none fill-primary-600 transition-all absolute -bottom-2 right-2 w-8 group-hover:h-10 group-hover:w-10 h-0 w-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L8.94877 2.40564C9.78693 4.53083 11.4661 6.21184 13.5858 7.04784L16 8L13.5857 8.95217C11.4661 9.78816 9.78693 11.4692 8.94877 13.5944L8 16L7.05123 13.5944C6.21307 11.4692 4.53394 9.78816 2.41425 8.95217L0 8L2.41425 7.04783C4.53395 6.21184 6.21307 4.53083 7.05123 2.40564L8 0Z"></path>
            </svg>
            <button
              className="inline-flex items-center justify-center font-semibold text-center rounded-xl duration-150 whitespace-nowrap disabled:bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary-200 px-4 py-2 h-12 min-w-48 w-full"
              variant="allocated"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold italic text-primary-600"
              >
                <g clip-path="url(#clip0_2_2)">
                  <circle
                    cx="512"
                    cy="512"
                    r="512"
                    fill="currentColor"
                  ></circle>
                  <path
                    d="M362.769 648.081C332.283 648.081 307.305 640.908 287.834 626.561C268.62 611.959 259.013 591.207 259.013 564.308C259.013 558.671 259.653 551.754 260.934 543.556C264.265 525.111 269.004 502.951 275.153 477.075C292.574 406.624 337.535 371.398 410.036 371.398C429.763 371.398 447.44 374.728 463.067 381.389C478.695 387.794 490.992 397.529 499.958 410.595C508.925 423.404 513.408 438.775 513.408 456.708C513.408 462.088 512.768 468.877 511.487 477.075C507.644 499.876 503.032 522.037 497.652 543.556C488.686 578.654 473.186 604.913 451.154 622.334C429.122 639.499 399.66 648.081 362.769 648.081ZM368.149 592.745C382.496 592.745 394.665 588.517 404.656 580.063C414.904 571.609 422.205 558.671 426.56 541.251C432.453 517.169 436.936 496.161 440.01 478.228C441.035 472.848 441.547 467.34 441.547 461.704C441.547 438.391 429.378 426.734 405.04 426.734C390.694 426.734 378.397 430.962 368.149 439.416C358.158 447.87 350.985 460.808 346.629 478.228C342.018 495.393 337.407 516.4 332.795 541.251C331.77 546.374 331.258 551.754 331.258 557.391C331.258 580.96 343.555 592.745 368.149 592.745Z"
                    fill="white"
                  ></path>
                  <path
                    d="M531.052 644.238C528.234 644.238 526.056 643.342 524.519 641.548C523.238 639.499 522.854 637.193 523.366 634.631L576.397 384.848C576.91 382.03 578.319 379.724 580.624 377.931C582.93 376.137 585.364 375.241 587.926 375.241H690.145C718.582 375.241 741.383 381.133 758.547 392.918C775.968 404.702 784.679 421.739 784.679 444.027C784.679 450.432 783.91 457.093 782.373 464.01C775.968 493.472 763.031 515.248 743.56 529.338C724.346 543.428 697.959 550.473 664.398 550.473H612.52L594.843 634.631C594.331 637.449 592.922 639.755 590.616 641.548C588.31 643.342 585.876 644.238 583.314 644.238H531.052ZM667.088 497.442C677.848 497.442 687.199 494.496 695.141 488.604C703.339 482.712 708.719 474.257 711.281 463.241C712.049 458.886 712.433 455.043 712.433 451.713C712.433 444.283 710.256 438.647 705.901 434.804C701.545 430.705 694.116 428.656 683.612 428.656H637.498L622.896 497.442H667.088Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_2_2">
                    <rect width="1024" height="1024"></rect>
                  </clipPath>
                </defs>
              </svg>
              49,690
            </button>
          </div>
        </div>
      </a>
      <a
        target="_blank"
        href="/projects/0x03465fe21e603b8d7564f75829c8703c04c51bfac5bc6ce60462c5b2b40ed558"
      >
        <div className="cursor-pointer rounded-[20px] border p-2 transition-colors hover:border-gray-400 group group flex h-full flex-col">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="bg-gray-200 bg-cover bg-center h-24 opacity-50 transition-opacity group-hover:opacity-100"
              style='background-image: url("https://content.optimism.io/profile/v0/banner-image/10/0xc2fB4B3EA53E10c88D193E709A81C4dc7aEC902e.png");'
            ></div>
          </div>
          <div className="relative z-10 flex-1 space-y-2 px-4 pb-2">
            <div className="-mt-8 pb-2">
              <div
                className="bg-cover inline-flex border border-gray-200 bg-white flex-shrink-0 rounded-lg p-1 h-16 w-16 origin-left transition group-hover:scale-75"
                style='background-image: url("https://content.optimism.io/profile/v0/profile-image/10/0xc2fB4B3EA53E10c88D193E709A81C4dc7aEC902e.png");'
              ></div>
            </div>
            <div className="transition-transform group-hover:-translate-y-4">
              <h3 className="text-base md:text-lg font-bold">
                Josh | The Blockchain Socialist
              </h3>
              <p className="line-clamp-2 text-sm text-neutral-700">
                I explore the intersection of crypto and politics.
              </p>
            </div>
            <div className="no-scrollbar">
              <div className="flex gap-1 overflow-x-auto"></div>
            </div>
          </div>
          <div className="relative">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none fill-primary-600 transition-all absolute -top-1 left-2 w-4 group-hover:h-6 group-hover:w-6 h-0 w-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L8.94877 2.40564C9.78693 4.53083 11.4661 6.21184 13.5858 7.04784L16 8L13.5857 8.95217C11.4661 9.78816 9.78693 11.4692 8.94877 13.5944L8 16L7.05123 13.5944C6.21307 11.4692 4.53394 9.78816 2.41425 8.95217L0 8L2.41425 7.04783C4.53395 6.21184 6.21307 4.53083 7.05123 2.40564L8 0Z"></path>
            </svg>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none fill-primary-600 transition-all absolute -bottom-2 right-2 w-8 group-hover:h-10 group-hover:w-10 h-0 w-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L8.94877 2.40564C9.78693 4.53083 11.4661 6.21184 13.5858 7.04784L16 8L13.5857 8.95217C11.4661 9.78816 9.78693 11.4692 8.94877 13.5944L8 16L7.05123 13.5944C6.21307 11.4692 4.53394 9.78816 2.41425 8.95217L0 8L2.41425 7.04783C4.53395 6.21184 6.21307 4.53083 7.05123 2.40564L8 0Z"></path>
            </svg>
            <button
              className="inline-flex items-center justify-center font-semibold text-center rounded-xl duration-150 whitespace-nowrap disabled:bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary-200 px-4 py-2 h-12 min-w-48 w-full"
              variant="allocated"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold italic text-primary-600"
              >
                <g clip-path="url(#clip0_2_2)">
                  <circle
                    cx="512"
                    cy="512"
                    r="512"
                    fill="currentColor"
                  ></circle>
                  <path
                    d="M362.769 648.081C332.283 648.081 307.305 640.908 287.834 626.561C268.62 611.959 259.013 591.207 259.013 564.308C259.013 558.671 259.653 551.754 260.934 543.556C264.265 525.111 269.004 502.951 275.153 477.075C292.574 406.624 337.535 371.398 410.036 371.398C429.763 371.398 447.44 374.728 463.067 381.389C478.695 387.794 490.992 397.529 499.958 410.595C508.925 423.404 513.408 438.775 513.408 456.708C513.408 462.088 512.768 468.877 511.487 477.075C507.644 499.876 503.032 522.037 497.652 543.556C488.686 578.654 473.186 604.913 451.154 622.334C429.122 639.499 399.66 648.081 362.769 648.081ZM368.149 592.745C382.496 592.745 394.665 588.517 404.656 580.063C414.904 571.609 422.205 558.671 426.56 541.251C432.453 517.169 436.936 496.161 440.01 478.228C441.035 472.848 441.547 467.34 441.547 461.704C441.547 438.391 429.378 426.734 405.04 426.734C390.694 426.734 378.397 430.962 368.149 439.416C358.158 447.87 350.985 460.808 346.629 478.228C342.018 495.393 337.407 516.4 332.795 541.251C331.77 546.374 331.258 551.754 331.258 557.391C331.258 580.96 343.555 592.745 368.149 592.745Z"
                    fill="white"
                  ></path>
                  <path
                    d="M531.052 644.238C528.234 644.238 526.056 643.342 524.519 641.548C523.238 639.499 522.854 637.193 523.366 634.631L576.397 384.848C576.91 382.03 578.319 379.724 580.624 377.931C582.93 376.137 585.364 375.241 587.926 375.241H690.145C718.582 375.241 741.383 381.133 758.547 392.918C775.968 404.702 784.679 421.739 784.679 444.027C784.679 450.432 783.91 457.093 782.373 464.01C775.968 493.472 763.031 515.248 743.56 529.338C724.346 543.428 697.959 550.473 664.398 550.473H612.52L594.843 634.631C594.331 637.449 592.922 639.755 590.616 641.548C588.31 643.342 585.876 644.238 583.314 644.238H531.052ZM667.088 497.442C677.848 497.442 687.199 494.496 695.141 488.604C703.339 482.712 708.719 474.257 711.281 463.241C712.049 458.886 712.433 455.043 712.433 451.713C712.433 444.283 710.256 438.647 705.901 434.804C701.545 430.705 694.116 428.656 683.612 428.656H637.498L622.896 497.442H667.088Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_2_2">
                    <rect width="1024" height="1024"></rect>
                  </clipPath>
                </defs>
              </svg>
              24,845
            </button>
          </div>
        </div>
      </a>
      <a
        target="_blank"
        href="/projects/0xa5a843f8a51aac49eacd6f5a69a68235e273a101da9916a73f2c5373ab827496"
      >
        <div className="cursor-pointer rounded-[20px] border p-2 transition-colors hover:border-gray-400 group group flex h-full flex-col">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="bg-gray-200 bg-cover bg-center h-24 opacity-50 transition-opacity group-hover:opacity-100"
              style='background-image: url("https://content.optimism.io/profile/v0/banner-image/10/0xa83926fe58B9bEd62103b540d7eb928f64125979.png");'
            ></div>
          </div>
          <div className="relative z-10 flex-1 space-y-2 px-4 pb-2">
            <div className="-mt-8 pb-2">
              <div
                className="bg-cover inline-flex border border-gray-200 bg-white flex-shrink-0 rounded-lg p-1 h-16 w-16 origin-left transition group-hover:scale-75"
                style='background-image: url("https://content.optimism.io/profile/v0/profile-image/10/0xa83926fe58B9bEd62103b540d7eb928f64125979.png");'
              ></div>
            </div>
            <div className="transition-transform group-hover:-translate-y-4">
              <h3 className="text-base md:text-lg font-bold">Optimism Guide</h3>
              <p className="line-clamp-2 text-sm text-neutral-700">
                An Optimism glossary, a directory of tools and resources, and a
                micro lesson
              </p>
            </div>
            <div className="no-scrollbar">
              <div className="flex gap-1 overflow-x-auto"></div>
            </div>
          </div>
          <div className="relative">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none fill-primary-600 transition-all absolute -top-1 left-2 w-4 group-hover:h-6 group-hover:w-6 h-0 w-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L8.94877 2.40564C9.78693 4.53083 11.4661 6.21184 13.5858 7.04784L16 8L13.5857 8.95217C11.4661 9.78816 9.78693 11.4692 8.94877 13.5944L8 16L7.05123 13.5944C6.21307 11.4692 4.53394 9.78816 2.41425 8.95217L0 8L2.41425 7.04783C4.53395 6.21184 6.21307 4.53083 7.05123 2.40564L8 0Z"></path>
            </svg>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none fill-primary-600 transition-all absolute -bottom-2 right-2 w-8 group-hover:h-10 group-hover:w-10 h-0 w-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L8.94877 2.40564C9.78693 4.53083 11.4661 6.21184 13.5858 7.04784L16 8L13.5857 8.95217C11.4661 9.78816 9.78693 11.4692 8.94877 13.5944L8 16L7.05123 13.5944C6.21307 11.4692 4.53394 9.78816 2.41425 8.95217L0 8L2.41425 7.04783C4.53395 6.21184 6.21307 4.53083 7.05123 2.40564L8 0Z"></path>
            </svg>
            <button
              className="inline-flex items-center justify-center font-semibold text-center rounded-xl duration-150 whitespace-nowrap disabled:bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary-200 px-4 py-2 h-12 min-w-48 w-full"
              variant="allocated"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold italic text-primary-600"
              >
                <g clip-path="url(#clip0_2_2)">
                  <circle
                    cx="512"
                    cy="512"
                    r="512"
                    fill="currentColor"
                  ></circle>
                  <path
                    d="M362.769 648.081C332.283 648.081 307.305 640.908 287.834 626.561C268.62 611.959 259.013 591.207 259.013 564.308C259.013 558.671 259.653 551.754 260.934 543.556C264.265 525.111 269.004 502.951 275.153 477.075C292.574 406.624 337.535 371.398 410.036 371.398C429.763 371.398 447.44 374.728 463.067 381.389C478.695 387.794 490.992 397.529 499.958 410.595C508.925 423.404 513.408 438.775 513.408 456.708C513.408 462.088 512.768 468.877 511.487 477.075C507.644 499.876 503.032 522.037 497.652 543.556C488.686 578.654 473.186 604.913 451.154 622.334C429.122 639.499 399.66 648.081 362.769 648.081ZM368.149 592.745C382.496 592.745 394.665 588.517 404.656 580.063C414.904 571.609 422.205 558.671 426.56 541.251C432.453 517.169 436.936 496.161 440.01 478.228C441.035 472.848 441.547 467.34 441.547 461.704C441.547 438.391 429.378 426.734 405.04 426.734C390.694 426.734 378.397 430.962 368.149 439.416C358.158 447.87 350.985 460.808 346.629 478.228C342.018 495.393 337.407 516.4 332.795 541.251C331.77 546.374 331.258 551.754 331.258 557.391C331.258 580.96 343.555 592.745 368.149 592.745Z"
                    fill="white"
                  ></path>
                  <path
                    d="M531.052 644.238C528.234 644.238 526.056 643.342 524.519 641.548C523.238 639.499 522.854 637.193 523.366 634.631L576.397 384.848C576.91 382.03 578.319 379.724 580.624 377.931C582.93 376.137 585.364 375.241 587.926 375.241H690.145C718.582 375.241 741.383 381.133 758.547 392.918C775.968 404.702 784.679 421.739 784.679 444.027C784.679 450.432 783.91 457.093 782.373 464.01C775.968 493.472 763.031 515.248 743.56 529.338C724.346 543.428 697.959 550.473 664.398 550.473H612.52L594.843 634.631C594.331 637.449 592.922 639.755 590.616 641.548C588.31 643.342 585.876 644.238 583.314 644.238H531.052ZM667.088 497.442C677.848 497.442 687.199 494.496 695.141 488.604C703.339 482.712 708.719 474.257 711.281 463.241C712.049 458.886 712.433 455.043 712.433 451.713C712.433 444.283 710.256 438.647 705.901 434.804C701.545 430.705 694.116 428.656 683.612 428.656H637.498L622.896 497.442H667.088Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_2_2">
                    <rect width="1024" height="1024"></rect>
                  </clipPath>
                </defs>
              </svg>
              19,876
            </button>
          </div>
        </div>
      </a>
      <a
        target="_blank"
        href="/projects/0x0eb54adbc7b4564eea0b18f9270d201dde386ad9aba771dff0cc0370ca4df523"
      >
        <div className="cursor-pointer rounded-[20px] border p-2 transition-colors hover:border-gray-400 group group flex h-full flex-col">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="bg-gray-200 bg-cover bg-center h-24 opacity-50 transition-opacity group-hover:opacity-100"
              style='background-image: url("https://content.optimism.io/profile/v0/banner-image/10/0x266B650F92753FD7Be17B7487C8CC3Bd05EFab8A.png");'
            ></div>
          </div>
          <div className="relative z-10 flex-1 space-y-2 px-4 pb-2">
            <div className="-mt-8 pb-2">
              <div
                className="bg-cover inline-flex border border-gray-200 bg-white flex-shrink-0 rounded-lg p-1 h-16 w-16 origin-left transition group-hover:scale-75"
                style='background-image: url("https://content.optimism.io/profile/v0/profile-image/10/0x266B650F92753FD7Be17B7487C8CC3Bd05EFab8A.png");'
              ></div>
            </div>
            <div className="transition-transform group-hover:-translate-y-4">
              <h3 className="text-base md:text-lg font-bold">Lore</h3>
              <p className="line-clamp-2 text-sm text-neutral-700">
                Lore helps communities form capital and coordinate at internet
                scale.{" "}
              </p>
            </div>
            <div className="no-scrollbar">
              <div className="flex gap-1 overflow-x-auto"></div>
            </div>
          </div>
          <div className="relative">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none fill-primary-600 transition-all absolute -top-1 left-2 w-4 group-hover:h-6 group-hover:w-6 h-0 w-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L8.94877 2.40564C9.78693 4.53083 11.4661 6.21184 13.5858 7.04784L16 8L13.5857 8.95217C11.4661 9.78816 9.78693 11.4692 8.94877 13.5944L8 16L7.05123 13.5944C6.21307 11.4692 4.53394 9.78816 2.41425 8.95217L0 8L2.41425 7.04783C4.53395 6.21184 6.21307 4.53083 7.05123 2.40564L8 0Z"></path>
            </svg>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none fill-primary-600 transition-all absolute -bottom-2 right-2 w-8 group-hover:h-10 group-hover:w-10 h-0 w-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L8.94877 2.40564C9.78693 4.53083 11.4661 6.21184 13.5858 7.04784L16 8L13.5857 8.95217C11.4661 9.78816 9.78693 11.4692 8.94877 13.5944L8 16L7.05123 13.5944C6.21307 11.4692 4.53394 9.78816 2.41425 8.95217L0 8L2.41425 7.04783C4.53395 6.21184 6.21307 4.53083 7.05123 2.40564L8 0Z"></path>
            </svg>
            <button
              className="inline-flex items-center justify-center font-semibold text-center rounded-xl duration-150 whitespace-nowrap disabled:bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary-200 px-4 py-2 h-12 min-w-48 w-full"
              variant="allocated"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold italic text-primary-600"
              >
                <g clip-path="url(#clip0_2_2)">
                  <circle
                    cx="512"
                    cy="512"
                    r="512"
                    fill="currentColor"
                  ></circle>
                  <path
                    d="M362.769 648.081C332.283 648.081 307.305 640.908 287.834 626.561C268.62 611.959 259.013 591.207 259.013 564.308C259.013 558.671 259.653 551.754 260.934 543.556C264.265 525.111 269.004 502.951 275.153 477.075C292.574 406.624 337.535 371.398 410.036 371.398C429.763 371.398 447.44 374.728 463.067 381.389C478.695 387.794 490.992 397.529 499.958 410.595C508.925 423.404 513.408 438.775 513.408 456.708C513.408 462.088 512.768 468.877 511.487 477.075C507.644 499.876 503.032 522.037 497.652 543.556C488.686 578.654 473.186 604.913 451.154 622.334C429.122 639.499 399.66 648.081 362.769 648.081ZM368.149 592.745C382.496 592.745 394.665 588.517 404.656 580.063C414.904 571.609 422.205 558.671 426.56 541.251C432.453 517.169 436.936 496.161 440.01 478.228C441.035 472.848 441.547 467.34 441.547 461.704C441.547 438.391 429.378 426.734 405.04 426.734C390.694 426.734 378.397 430.962 368.149 439.416C358.158 447.87 350.985 460.808 346.629 478.228C342.018 495.393 337.407 516.4 332.795 541.251C331.77 546.374 331.258 551.754 331.258 557.391C331.258 580.96 343.555 592.745 368.149 592.745Z"
                    fill="white"
                  ></path>
                  <path
                    d="M531.052 644.238C528.234 644.238 526.056 643.342 524.519 641.548C523.238 639.499 522.854 637.193 523.366 634.631L576.397 384.848C576.91 382.03 578.319 379.724 580.624 377.931C582.93 376.137 585.364 375.241 587.926 375.241H690.145C718.582 375.241 741.383 381.133 758.547 392.918C775.968 404.702 784.679 421.739 784.679 444.027C784.679 450.432 783.91 457.093 782.373 464.01C775.968 493.472 763.031 515.248 743.56 529.338C724.346 543.428 697.959 550.473 664.398 550.473H612.52L594.843 634.631C594.331 637.449 592.922 639.755 590.616 641.548C588.31 643.342 585.876 644.238 583.314 644.238H531.052ZM667.088 497.442C677.848 497.442 687.199 494.496 695.141 488.604C703.339 482.712 708.719 474.257 711.281 463.241C712.049 458.886 712.433 455.043 712.433 451.713C712.433 444.283 710.256 438.647 705.901 434.804C701.545 430.705 694.116 428.656 683.612 428.656H637.498L622.896 497.442H667.088Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_2_2">
                    <rect width="1024" height="1024"></rect>
                  </clipPath>
                </defs>
              </svg>
              59,628
            </button>
          </div>
        </div>
      </a>
      <a
        target="_blank"
        href="/projects/0x7424d0334feb519ea48f66153ce6b3f7dfd156f2dd861c23e4c5f308c95aef41"
      >
        <div className="cursor-pointer rounded-[20px] border p-2 transition-colors hover:border-gray-400 group group flex h-full flex-col">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="bg-gray-200 bg-cover bg-center h-24 opacity-50 transition-opacity group-hover:opacity-100 blur-[40px]"
              style='background-image: url("null");'
            ></div>
          </div>
          <div className="relative z-10 flex-1 space-y-2 px-4 pb-2">
            <div className="-mt-8 pb-2">
              <div
                className="bg-cover inline-flex border border-gray-200 bg-white flex-shrink-0 rounded-lg p-1 h-16 w-16 origin-left transition group-hover:scale-75"
                style='background-image: url("null");'
              ></div>
            </div>
            <div className="transition-transform group-hover:-translate-y-4">
              <h3 className="text-base md:text-lg font-bold">Rainie</h3>
              <p className="line-clamp-2 text-sm text-neutral-700">
                🔴 Optimism Enthusiastic DEFI Player!!
              </p>
            </div>
            <div className="no-scrollbar">
              <div className="flex gap-1 overflow-x-auto"></div>
            </div>
          </div>
          <div className="relative">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none fill-primary-600 transition-all absolute -top-1 left-2 w-4 group-hover:h-6 group-hover:w-6 h-0 w-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L8.94877 2.40564C9.78693 4.53083 11.4661 6.21184 13.5858 7.04784L16 8L13.5857 8.95217C11.4661 9.78816 9.78693 11.4692 8.94877 13.5944L8 16L7.05123 13.5944C6.21307 11.4692 4.53394 9.78816 2.41425 8.95217L0 8L2.41425 7.04783C4.53395 6.21184 6.21307 4.53083 7.05123 2.40564L8 0Z"></path>
            </svg>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none fill-primary-600 transition-all absolute -bottom-2 right-2 w-8 group-hover:h-10 group-hover:w-10 h-0 w-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L8.94877 2.40564C9.78693 4.53083 11.4661 6.21184 13.5858 7.04784L16 8L13.5857 8.95217C11.4661 9.78816 9.78693 11.4692 8.94877 13.5944L8 16L7.05123 13.5944C6.21307 11.4692 4.53394 9.78816 2.41425 8.95217L0 8L2.41425 7.04783C4.53395 6.21184 6.21307 4.53083 7.05123 2.40564L8 0Z"></path>
            </svg>
            <button
              className="inline-flex items-center justify-center font-semibold text-center rounded-xl duration-150 whitespace-nowrap disabled:bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary-200 px-4 py-2 h-12 min-w-48 w-full"
              variant="allocated"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold italic text-primary-600"
              >
                <g clip-path="url(#clip0_2_2)">
                  <circle
                    cx="512"
                    cy="512"
                    r="512"
                    fill="currentColor"
                  ></circle>
                  <path
                    d="M362.769 648.081C332.283 648.081 307.305 640.908 287.834 626.561C268.62 611.959 259.013 591.207 259.013 564.308C259.013 558.671 259.653 551.754 260.934 543.556C264.265 525.111 269.004 502.951 275.153 477.075C292.574 406.624 337.535 371.398 410.036 371.398C429.763 371.398 447.44 374.728 463.067 381.389C478.695 387.794 490.992 397.529 499.958 410.595C508.925 423.404 513.408 438.775 513.408 456.708C513.408 462.088 512.768 468.877 511.487 477.075C507.644 499.876 503.032 522.037 497.652 543.556C488.686 578.654 473.186 604.913 451.154 622.334C429.122 639.499 399.66 648.081 362.769 648.081ZM368.149 592.745C382.496 592.745 394.665 588.517 404.656 580.063C414.904 571.609 422.205 558.671 426.56 541.251C432.453 517.169 436.936 496.161 440.01 478.228C441.035 472.848 441.547 467.34 441.547 461.704C441.547 438.391 429.378 426.734 405.04 426.734C390.694 426.734 378.397 430.962 368.149 439.416C358.158 447.87 350.985 460.808 346.629 478.228C342.018 495.393 337.407 516.4 332.795 541.251C331.77 546.374 331.258 551.754 331.258 557.391C331.258 580.96 343.555 592.745 368.149 592.745Z"
                    fill="white"
                  ></path>
                  <path
                    d="M531.052 644.238C528.234 644.238 526.056 643.342 524.519 641.548C523.238 639.499 522.854 637.193 523.366 634.631L576.397 384.848C576.91 382.03 578.319 379.724 580.624 377.931C582.93 376.137 585.364 375.241 587.926 375.241H690.145C718.582 375.241 741.383 381.133 758.547 392.918C775.968 404.702 784.679 421.739 784.679 444.027C784.679 450.432 783.91 457.093 782.373 464.01C775.968 493.472 763.031 515.248 743.56 529.338C724.346 543.428 697.959 550.473 664.398 550.473H612.52L594.843 634.631C594.331 637.449 592.922 639.755 590.616 641.548C588.31 643.342 585.876 644.238 583.314 644.238H531.052ZM667.088 497.442C677.848 497.442 687.199 494.496 695.141 488.604C703.339 482.712 708.719 474.257 711.281 463.241C712.049 458.886 712.433 455.043 712.433 451.713C712.433 444.283 710.256 438.647 705.901 434.804C701.545 430.705 694.116 428.656 683.612 428.656H637.498L622.896 497.442H667.088Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_2_2">
                    <rect width="1024" height="1024"></rect>
                  </clipPath>
                </defs>
              </svg>
              0
            </button>
          </div>
        </div>
      </a>
      <a
        target="_blank"
        href="/projects/0x9d8e8db50a93b8fc1c68f5a99a240d4a5665fa0fe67b45c093bf70542e97fea7"
      >
        <div className="cursor-pointer rounded-[20px] border p-2 transition-colors hover:border-gray-400 group group flex h-full flex-col">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="bg-gray-200 bg-cover bg-center h-24 opacity-50 transition-opacity group-hover:opacity-100"
              style='background-image: url("https://content.optimism.io/profile/v0/banner-image/10/0xFdFC6E1BbEc01288447222fC8F1AEE55a7C72b7B.jpeg");'
            ></div>
          </div>
          <div className="relative z-10 flex-1 space-y-2 px-4 pb-2">
            <div className="-mt-8 pb-2">
              <div
                className="bg-cover inline-flex border border-gray-200 bg-white flex-shrink-0 rounded-lg p-1 h-16 w-16 origin-left transition group-hover:scale-75"
                style='background-image: url("https://content.optimism.io/profile/v0/profile-image/10/0xFdFC6E1BbEc01288447222fC8F1AEE55a7C72b7B.png");'
              ></div>
            </div>
            <div className="transition-transform group-hover:-translate-y-4">
              <h3 className="text-base md:text-lg font-bold">Agora</h3>
              <p className="line-clamp-2 text-sm text-neutral-700">
                Token house and Citizen house governance app and contract
              </p>
            </div>
            <div className="no-scrollbar">
              <div className="flex gap-1 overflow-x-auto"></div>
            </div>
          </div>
          <div className="relative">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none fill-primary-600 transition-all absolute -top-1 left-2 w-4 group-hover:h-6 group-hover:w-6 h-0 w-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L8.94877 2.40564C9.78693 4.53083 11.4661 6.21184 13.5858 7.04784L16 8L13.5857 8.95217C11.4661 9.78816 9.78693 11.4692 8.94877 13.5944L8 16L7.05123 13.5944C6.21307 11.4692 4.53394 9.78816 2.41425 8.95217L0 8L2.41425 7.04783C4.53395 6.21184 6.21307 4.53083 7.05123 2.40564L8 0Z"></path>
            </svg>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none fill-primary-600 transition-all absolute -bottom-2 right-2 w-8 group-hover:h-10 group-hover:w-10 h-0 w-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L8.94877 2.40564C9.78693 4.53083 11.4661 6.21184 13.5858 7.04784L16 8L13.5857 8.95217C11.4661 9.78816 9.78693 11.4692 8.94877 13.5944L8 16L7.05123 13.5944C6.21307 11.4692 4.53394 9.78816 2.41425 8.95217L0 8L2.41425 7.04783C4.53395 6.21184 6.21307 4.53083 7.05123 2.40564L8 0Z"></path>
            </svg>
            <button
              className="inline-flex items-center justify-center font-semibold text-center rounded-xl duration-150 whitespace-nowrap disabled:bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary-200 px-4 py-2 h-12 min-w-48 w-full"
              variant="allocated"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold italic text-primary-600"
              >
                <g clip-path="url(#clip0_2_2)">
                  <circle
                    cx="512"
                    cy="512"
                    r="512"
                    fill="currentColor"
                  ></circle>
                  <path
                    d="M362.769 648.081C332.283 648.081 307.305 640.908 287.834 626.561C268.62 611.959 259.013 591.207 259.013 564.308C259.013 558.671 259.653 551.754 260.934 543.556C264.265 525.111 269.004 502.951 275.153 477.075C292.574 406.624 337.535 371.398 410.036 371.398C429.763 371.398 447.44 374.728 463.067 381.389C478.695 387.794 490.992 397.529 499.958 410.595C508.925 423.404 513.408 438.775 513.408 456.708C513.408 462.088 512.768 468.877 511.487 477.075C507.644 499.876 503.032 522.037 497.652 543.556C488.686 578.654 473.186 604.913 451.154 622.334C429.122 639.499 399.66 648.081 362.769 648.081ZM368.149 592.745C382.496 592.745 394.665 588.517 404.656 580.063C414.904 571.609 422.205 558.671 426.56 541.251C432.453 517.169 436.936 496.161 440.01 478.228C441.035 472.848 441.547 467.34 441.547 461.704C441.547 438.391 429.378 426.734 405.04 426.734C390.694 426.734 378.397 430.962 368.149 439.416C358.158 447.87 350.985 460.808 346.629 478.228C342.018 495.393 337.407 516.4 332.795 541.251C331.77 546.374 331.258 551.754 331.258 557.391C331.258 580.96 343.555 592.745 368.149 592.745Z"
                    fill="white"
                  ></path>
                  <path
                    d="M531.052 644.238C528.234 644.238 526.056 643.342 524.519 641.548C523.238 639.499 522.854 637.193 523.366 634.631L576.397 384.848C576.91 382.03 578.319 379.724 580.624 377.931C582.93 376.137 585.364 375.241 587.926 375.241H690.145C718.582 375.241 741.383 381.133 758.547 392.918C775.968 404.702 784.679 421.739 784.679 444.027C784.679 450.432 783.91 457.093 782.373 464.01C775.968 493.472 763.031 515.248 743.56 529.338C724.346 543.428 697.959 550.473 664.398 550.473H612.52L594.843 634.631C594.331 637.449 592.922 639.755 590.616 641.548C588.31 643.342 585.876 644.238 583.314 644.238H531.052ZM667.088 497.442C677.848 497.442 687.199 494.496 695.141 488.604C703.339 482.712 708.719 474.257 711.281 463.241C712.049 458.886 712.433 455.043 712.433 451.713C712.433 444.283 710.256 438.647 705.901 434.804C701.545 430.705 694.116 428.656 683.612 428.656H637.498L622.896 497.442H667.088Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_2_2">
                    <rect width="1024" height="1024"></rect>
                  </clipPath>
                </defs>
              </svg>
              212,310
            </button>
          </div>
        </div>
      </a>
      <a
        target="_blank"
        href="/projects/0x0056608c46c8d39fe0433671112d2b657578f801379b16e62f2e910f72406745"
      >
        <div className="cursor-pointer rounded-[20px] border p-2 transition-colors hover:border-gray-400 group group flex h-full flex-col">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="bg-gray-200 bg-cover bg-center h-24 opacity-50 transition-opacity group-hover:opacity-100"
              style='background-image: url("https://content.optimism.io/profile/v0/banner-image/10/0x5913c6862f3d6641cfDF16a974245f47E58d4BE2.png");'
            ></div>
          </div>
          <div className="relative z-10 flex-1 space-y-2 px-4 pb-2">
            <div className="-mt-8 pb-2">
              <div
                className="bg-cover inline-flex border border-gray-200 bg-white flex-shrink-0 rounded-lg p-1 h-16 w-16 origin-left transition group-hover:scale-75"
                style='background-image: url("https://content.optimism.io/profile/v0/profile-image/10/0x5913c6862f3d6641cfDF16a974245f47E58d4BE2.png");'
              ></div>
            </div>
            <div className="transition-transform group-hover:-translate-y-4">
              <h3 className="text-base md:text-lg font-bold">WhatsABI</h3>
              <p className="line-clamp-2 text-sm text-neutral-700">
                Extract ABI (and more) from EVM bytecode, even without source
                code.
              </p>
            </div>
            <div className="no-scrollbar">
              <div className="flex gap-1 overflow-x-auto"></div>
            </div>
          </div>
          <div className="relative">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none fill-primary-600 transition-all absolute -top-1 left-2 w-4 group-hover:h-6 group-hover:w-6 h-0 w-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L8.94877 2.40564C9.78693 4.53083 11.4661 6.21184 13.5858 7.04784L16 8L13.5857 8.95217C11.4661 9.78816 9.78693 11.4692 8.94877 13.5944L8 16L7.05123 13.5944C6.21307 11.4692 4.53394 9.78816 2.41425 8.95217L0 8L2.41425 7.04783C4.53395 6.21184 6.21307 4.53083 7.05123 2.40564L8 0Z"></path>
            </svg>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none fill-primary-600 transition-all absolute -bottom-2 right-2 w-8 group-hover:h-10 group-hover:w-10 h-0 w-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L8.94877 2.40564C9.78693 4.53083 11.4661 6.21184 13.5858 7.04784L16 8L13.5857 8.95217C11.4661 9.78816 9.78693 11.4692 8.94877 13.5944L8 16L7.05123 13.5944C6.21307 11.4692 4.53394 9.78816 2.41425 8.95217L0 8L2.41425 7.04783C4.53395 6.21184 6.21307 4.53083 7.05123 2.40564L8 0Z"></path>
            </svg>
            <button
              className="inline-flex items-center justify-center font-semibold text-center rounded-xl duration-150 whitespace-nowrap disabled:bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary-200 px-4 py-2 h-12 min-w-48 w-full"
              variant="allocated"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold italic text-primary-600"
              >
                <g clip-path="url(#clip0_2_2)">
                  <circle
                    cx="512"
                    cy="512"
                    r="512"
                    fill="currentColor"
                  ></circle>
                  <path
                    d="M362.769 648.081C332.283 648.081 307.305 640.908 287.834 626.561C268.62 611.959 259.013 591.207 259.013 564.308C259.013 558.671 259.653 551.754 260.934 543.556C264.265 525.111 269.004 502.951 275.153 477.075C292.574 406.624 337.535 371.398 410.036 371.398C429.763 371.398 447.44 374.728 463.067 381.389C478.695 387.794 490.992 397.529 499.958 410.595C508.925 423.404 513.408 438.775 513.408 456.708C513.408 462.088 512.768 468.877 511.487 477.075C507.644 499.876 503.032 522.037 497.652 543.556C488.686 578.654 473.186 604.913 451.154 622.334C429.122 639.499 399.66 648.081 362.769 648.081ZM368.149 592.745C382.496 592.745 394.665 588.517 404.656 580.063C414.904 571.609 422.205 558.671 426.56 541.251C432.453 517.169 436.936 496.161 440.01 478.228C441.035 472.848 441.547 467.34 441.547 461.704C441.547 438.391 429.378 426.734 405.04 426.734C390.694 426.734 378.397 430.962 368.149 439.416C358.158 447.87 350.985 460.808 346.629 478.228C342.018 495.393 337.407 516.4 332.795 541.251C331.77 546.374 331.258 551.754 331.258 557.391C331.258 580.96 343.555 592.745 368.149 592.745Z"
                    fill="white"
                  ></path>
                  <path
                    d="M531.052 644.238C528.234 644.238 526.056 643.342 524.519 641.548C523.238 639.499 522.854 637.193 523.366 634.631L576.397 384.848C576.91 382.03 578.319 379.724 580.624 377.931C582.93 376.137 585.364 375.241 587.926 375.241H690.145C718.582 375.241 741.383 381.133 758.547 392.918C775.968 404.702 784.679 421.739 784.679 444.027C784.679 450.432 783.91 457.093 782.373 464.01C775.968 493.472 763.031 515.248 743.56 529.338C724.346 543.428 697.959 550.473 664.398 550.473H612.52L594.843 634.631C594.331 637.449 592.922 639.755 590.616 641.548C588.31 643.342 585.876 644.238 583.314 644.238H531.052ZM667.088 497.442C677.848 497.442 687.199 494.496 695.141 488.604C703.339 482.712 708.719 474.257 711.281 463.241C712.049 458.886 712.433 455.043 712.433 451.713C712.433 444.283 710.256 438.647 705.901 434.804C701.545 430.705 694.116 428.656 683.612 428.656H637.498L622.896 497.442H667.088Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_2_2">
                    <rect width="1024" height="1024"></rect>
                  </clipPath>
                </defs>
              </svg>
              94,410
            </button>
          </div>
        </div>
      </a>
    </div>
  );
}
