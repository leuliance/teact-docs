import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { File, Files, Folder } from 'fumadocs-ui/components/files';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import type { MDXComponents } from 'mdx/types';
import { ReleaseBadge } from './release-badge';
import { Callout } from './docs/callout';
import { TelegramPreview } from './docs/telegram-preview';
import { Tab, Tabs } from './docs/tabs';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Callout,
    Tabs,
    Tab,
    Steps,
    Step,
    Files,
    Folder,
    File,
    Accordion,
    Accordions,
    TypeTable,
    TelegramPreview,
    ReleaseBadge,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
