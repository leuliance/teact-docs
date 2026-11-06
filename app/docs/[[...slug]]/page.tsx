import { getPageImage, getPageMarkdownUrl, source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  ViewOptionsPopover,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { gitConfig } from '@/lib/shared';

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = getPageMarkdownUrl(page).url;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full} tableOfContent={{ style: 'clerk' }}>
      <header className="not-prose mb-2 border-b-2 border-ink pb-6">
        <DocsTitle className="text-[2.125rem] font-extrabold leading-[1.05] tracking-[-0.03em] [font-stretch:110%] sm:text-[2.625rem]">
          {page.data.title}
        </DocsTitle>
        {page.data.description && (
          <DocsDescription className="mb-0 mt-3 max-w-[62ch] text-lg leading-relaxed text-ink-soft">
            {page.data.description}
          </DocsDescription>
        )}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="border border-rule bg-kraft-tint px-2 py-1 font-mono text-[0.6875rem] text-ink-soft">
            {page.path}
          </span>
          <MarkdownCopyButton markdownUrl={markdownUrl} />
          <ViewOptionsPopover
            markdownUrl={markdownUrl}
            githubUrl={`https://github.com/${gitConfig.user}/teact-docs/blob/${gitConfig.branch}/content/docs/${page.path}`}
          />
        </div>
      </header>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: PageProps<'/docs/[[...slug]]'>): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
