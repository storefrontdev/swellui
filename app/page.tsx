import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { AppleMusicDemo } from "@/components/apple-music-demo"
import { CopyButton } from "@/components/copy-button"
import { PromoVideo } from "@/components/promo-video"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"
export default function IndexPage() {
  return (
    <>
      <section className="pt-6 pb-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">
          <div className="flex flex-col col-span-1 md:col-span-2 items-start space-y-5">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
              Build a Better Storefront, Faster. <br className="hidden sm:inline" />
              Components Built with Radix UI and Tailwind CSS.
            </h1>
            <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
              Accessible and customizable components that you can copy and paste
              into your apps. Free. Open Source. And Next.js 13 Ready.
            </p>

            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:flex-row">
              <Link href="/docs" className={buttonVariants({ size: "lg" })}>
                Documentation
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href={siteConfig.links.github}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "md:hidden"
                )}
              >
                GitHub
              </Link>
              <pre className="hidden h-11 items-center justify-between space-x-2 overflow-x-auto rounded-lg border border-slate-100 bg-slate-100 pr-2 pl-6 dark:border-slate-700 dark:bg-black md:flex">
                <code className="font-mono text-sm font-semibold text-slate-900 dark:text-slate-50">
                  npx create-next-app -e https://github.com/storefrontdev/dennis
                </code>
                <CopyButton
                  value="npx create-next-app -e https://github.com/shadcn/next-template"
                  className="border-none text-slate-900 hover:bg-transparent dark:text-slate-50"
                />
              </pre>
            </div>
          </div>
          <div className="relative col-span-1 px-5 md:px-0">
            <div className="relative border border-white border-opacity-30 bg-[#12011F] rounded-md shadow-lg flex flex-col z-10">
              <div className="h-[275px] md:h-[350px] w-full relative overflow-hidden rounded-tl-md rounded-tr-md">
                <Image src="/images/sike-dunk.png" alt="sike dunk shoes" fill className="object-cover object-center"/>
              </div>
              <div className="p-5">
                <span className="rounded-full px-3 py-0.5 border border-[#D6FB6F] text-[#D6FB6F] opacity-50 font-bolder uppercase text-[10px]">Trending</span>
                <div className="mt-2 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-white">Sike Air Jumper</h2>
                  <p className="text-xl font-light text-white opacity-50">$120</p>
                </div>
                <p className="text-gray-50 opacity-50 font-light">Men&apos;s Shoe</p>
                <div className="mt-5 flex items-center space-x-3">
                  <div className="cursor-pointer rounded-full border-2 border-white w-10 h-10 flex items-center justify-center">
                    <div className="rounded-full bg-[#57349B] w-8 h-8" />
                  </div>
                  <div className="cursor-pointer rounded-full bg-[#D6FB6F] w-10 h-10 flex items-center justify-center">
                  </div>
                  <div className="cursor-pointer rounded-full bg-[#DD9763] w-10 h-10 flex items-center justify-center">
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <span className="mt-2 text-[10px] font-bolder text-gray-500 dark:text-white uppercase">Product Preview</span>
            </div>
            <div className="blur-2xl bg-[#57349b] opacity-50 absolute md:-inset-x-10 -inset-y-0 rounded-lg shadow-lg p-20" />
          </div>
        </div>
      </section>
    </>
  )
}
