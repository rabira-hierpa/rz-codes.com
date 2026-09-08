import { vi } from "vitest"

export const staticQueryData = {
  site: {
    siteMetadata: {
      title: "Rz Codes",
      description: "Portfolio site",
      author: "Rabra Hierpa",
      siteUrl: "https://rz-codes.com",
      defaultOgImage: "/icons/icon-512x512.png",
      locale: "en_US",
      twitterUsername: "rzcodes",
      sameAs: ["https://github.com/rabira-hierpa"],
    },
  },
  appsData: {
    nodes: [
      {
        id: "app-1",
        title: "Map App",
        description: "A location app",
        image: "https://example.com/app1.png",
        demo: "https://example.com/demo1",
        link: "https://github.com/example/app1",
        tags: ["React", "Mapbox", "Archived", "API", "Node"],
        appType: "location",
        discontinued: true,
      },
      {
        id: "app-2",
        title: "Web App",
        description: "A web app",
        image: "https://example.com/app2.png",
        demo: null,
        link: "https://github.com/example/app2",
        tags: ["React", "Node"],
        appType: "web",
        discontinued: false,
      },
      {
        id: "app-3",
        title: "Third App",
        description: "Another app",
        image: "https://example.com/app3.png",
        demo: "https://example.com/demo3",
        link: null,
        tags: ["React"],
        appType: "web",
        discontinued: false,
      },
    ],
  },
  allAppsJson: {
    nodes: [
      {
        id: "a1",
        image: "https://example.com/a1.png",
        title: "App One",
        tags: ["React", "Archived"],
        description: "First app",
        demo: "https://example.com/demo-a1",
        link: "https://github.com/example/a1",
        discontinued: true,
      },
      {
        id: "a2",
        image: "https://example.com/a2.png",
        title: "App Two",
        tags: ["Node", "API"],
        description: "Second app",
        demo: null,
        link: "https://github.com/example/a2",
        discontinued: false,
      },
      {
        id: "a3",
        image: "https://example.com/a3.png",
        title: "App Three",
        tags: ["GIS"],
        description: "Third app",
        demo: "https://example.com/demo-a3",
        link: null,
        discontinued: false,
      },
    ],
  },
  allProjectsJson: {
    nodes: [
      {
        id: "p1",
        title: "Project One",
        description: "Project description one",
        url: "https://example.com/map1",
        data: "https://example.com/data1.csv",
        img: "https://example.com/p1.png",
        tags: ["Transit", "GIS", "Map"],
      },
      {
        id: "p2",
        title: "Project Two",
        description: "Project description two",
        url: "https://example.com/map2",
        data: null,
        img: "https://example.com/p2.png",
        tags: ["Planning"],
      },
      {
        id: "p3",
        title: "Project Three",
        description: "Project description three",
        url: "https://example.com/map3",
        data: "https://example.com/data3.csv",
        img: "https://example.com/p3.png",
        tags: ["GIS"],
      },
    ],
  },
  allDesignsJson: {
    nodes: [
      {
        id: "d1",
        images: [
          "https://example.com/design-1.jpg",
          "https://example.com/design-2.jpg",
          "https://example.com/design-3.jpg",
          "https://example.com/design-4.jpg",
          "https://example.com/design-5.jpg",
          "https://example.com/design-6.jpg",
          "https://example.com/design-7.jpg",
        ],
      },
    ],
  },
  allWpPost: {
    nodes: [
      {
        id: "w1",
        title: "GIS Update",
        excerpt: "<p>Latest GIS article content</p>",
        uri: "/blog/gis-update",
        date: "January 01, 2026",
        tags: { nodes: [{ name: "GIS" }] },
        featuredImage: {
          node: {
            altText: "GIS image",
            sourceUrl: "https://example.com/wp-1.jpg",
          },
        },
      },
      {
        id: "w2",
        title: "Web Dev Tips",
        excerpt: "<p>Web development tips and tricks</p>",
        uri: "/blog/web-dev-tips",
        date: "January 02, 2026",
        tags: { nodes: [{ name: "Web Dev" }] },
        featuredImage: {
          node: {
            altText: "Web image",
            sourceUrl: "https://example.com/wp-2.jpg",
          },
        },
      },
      {
        id: "w3",
        title: "Database Notes",
        excerpt: "<p>SQL and database notes</p>",
        uri: "/blog/database-notes",
        date: "January 03, 2026",
        tags: { nodes: [{ name: "Database" }] },
        featuredImage: {
          node: {
            altText: "DB image",
            sourceUrl: "https://example.com/wp-3.jpg",
          },
        },
      },
    ],
  },
}

export const mockUseStaticQuery = vi.fn(() => staticQueryData)
export const mockUseLocation = vi.fn(() => ({ pathname: "/" }))
