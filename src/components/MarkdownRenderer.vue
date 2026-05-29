<template>
  <div v-html="markeddownContent" :class="klass"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { marked } from "marked";
import { gfmHeadingId } from "marked-gfm-heading-id";
import DOMPurify from "dompurify";
import { externalLinks } from "./marked-external-urls";
import { injectEmojis } from "./emojis";

marked.use(gfmHeadingId());
marked.use(externalLinks());

export interface MarkdownRendererProps {
  markdown: string;
  isTrusted?: boolean;
  noClass?: boolean;
}

const props = defineProps<MarkdownRendererProps>();

const dompurify = DOMPurify(window);

const markeddownContent = computed(() => {
  const content = generateMarkup(props.markdown);
  return content;
});

const klass = computed(() => {
  if (props.noClass) return "";
  return "markdown-renderer";
});

function generateMarkup(markdown: string): string {
  const value = injectEmojis(markdown || "");
  const html = marked.parse(value, { gfm: true, breaks: true }) as string;

  if (props.isTrusted) {
    return html;
  } else {
    return dompurify.sanitize(html, {});
  }
}
</script>
