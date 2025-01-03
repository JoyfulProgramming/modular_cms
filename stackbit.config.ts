import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';
import { Page } from './src/_models/page';
import { MarketingHeroCoverImageWithCtas } from './src/_models/MarketingHeroCoverImageWithCtas';
import { FeatureSectionsCtaList } from './src/_models/FeatureSectionsCtaList';
import { FeatureSectionsIcons } from './src/_models/FeatureSectionsIcons';
import { FeatureSectionsCardList } from './src/_models/FeatureSectionsCardList';
import { PricingTable } from './src/_models/PricingTable';
import { FaqSectionsAccordion } from './src/_models/FaqSectionsAccordion';
import { ContactDefaultForm } from './src/_models/ContactDefaultForm';

export default defineStackbitConfig({
    stackbitVersion: '~0.7.0',
    ssgName: 'custom',
    devCommand: './node_modules/.bin/eleventy && ./node_modules/.bin/tailwindcss -i src/tailwind.css -c tailwind.config.js -o _site/styles.css && ./node_modules/.bin/eleventy --serve --port {PORT} --incremental',
    experimental: {
        ssg: {
            name: 'eleventy',
            logPatterns: {
                up: ['Server at']
            }
        }
    },
    useESM: true,
    nodeVersion: '20',
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ['src'],
            models: [
                Page,
                MarketingHeroCoverImageWithCtas,
                FeatureSectionsCtaList,
                FeatureSectionsIcons,
                FeatureSectionsCardList,
                PricingTable,
                FaqSectionsAccordion,
                ContactDefaultForm
            ],
            assetsConfig: {
                referenceType: 'static',
                staticDir: 'public',
                uploadDir: 'images',
                publicPath: '/'
            }
        })
    ],
    modelExtensions: [
        { name: 'Page', type: 'page', urlPath: '/{slug}' },
    ],
    pagesDir: 'src',
    sidebarButtons: []
});