<template>
  <div class="home">
    <BannerWorkDetailComp />
    <HeaderComp />
    <DetailWorkComp :slug="portfolioId" />
    <FooterComp />
  </div>
</template>

<script>
// @ is an alias to /src
import "../assets/styles/style.css";
import HeaderComp from "@/components/template/HeaderComp.vue";
import BannerWorkDetailComp from "@/components/work/BannerWorkDetailComp.vue";
import DetailWorkComp from "@/components/work/DetailWorkComp.vue";
import FooterComp from "@/components/template/FooterComp.vue";

import { useMeta } from "vue-meta";
import { getMetaPage } from "@/api/koontjie";

export default {
  name: "WorkView",
  components: {
    HeaderComp,
    BannerWorkDetailComp,
    DetailWorkComp,
    FooterComp,
  },
  mounted() {
    console.log(this.$route.params);
  },
  props: ["slug"],
  data() {
    return {
      portfolioId: this.$route.params.slug,
      media: process.env.VUE_APP_MEDIA_URL,
    };
  },
  setup() {
    const { meta } = useMeta({ title: "Koontjie" });
    return {
      meta,
    };
  },
  methods: {
    async refreshMeta() {
      const getResponse = await getMetaPage("portfolio");
      if (getResponse.status === 200) {
        const data = getResponse.data.data;
        const tempMeta = [
          {
            name: "description",
            content: data[0].meta_description,
          },
          {
            name: "keyword",
            content: data[0].meta_keyword,
          },
          {
            name: "robots",
            content: data[0].meta_robots,
          },
          {
            property: "og:locale",
            content: data[0].og_locale,
          },
          {
            property: "og:locale:alternate",
            content: data[0].og_locale_alternate,
          },
          {
            property: "og:title",
            content: data[0].og_title,
          },
          {
            property: "og:description",
            content: data[0].og_description,
          },
          {
            property: "og:type",
            content: data[0].og_type,
          },
          {
            property: "og:url",
            content: data[0].og_url,
          },
          {
            property: "og:image",
            content: this.media + data[0].og_image,
          },
          {
            property: "og:image:width",
            content: data[0].og_image_width,
          },
          {
            property: "og:image:height",
            content: data[0].og_image_height,
          },
          {
            property: "og:site_name",
            content: data[0].og_site_name,
          },
          {
            property: "twitter:card",
            content: data[0].twitter_card,
          },
          {
            property: "twitter:title",
            content: data[0].twitter_title,
          },
          {
            property: "twitter:description",
            content: data[0].twitter_description,
          },
          {
            property: "twitter:image",
            content: this.media + data[0].twitter_image,
          },
          {
            property: "twitter:creator",
            content: data[0].twitter_creator,
          },
          {
            property: "twitter:site",
            content: data[0].twitter_site,
          },
        ];
        this.meta.meta = tempMeta;
        this.meta.title = data[0].meta_title;
      } else {
        console.log(getResponse);
      }
    },
  },
  created() {
    this.refreshMeta();
    this.$watch(
      () => this.$route.params.slug,
      (toParams, previousParams) => {
        if (toParams !== previousParams) {
          this.portfolioId = toParams;
          console.log(this.portfolioId);
        }
      }
    );
  },
};
</script>
