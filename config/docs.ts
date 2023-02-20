import { MainNavItem, SidebarNavItem } from "types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Hooks",
      href: "/docs/hooks/use-variants",
    },
    {
      title: "Components",
      href: "/docs/components/product-card",
    },
    {
      title: "Primitives",
      href: "/docs/primitives/accordion",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
      ],
    },
    {
      title: "Hooks",
      items: [
        {
          title: "useImages",
          href: "/docs/hooks/use-images",
          items: [],
        },
        {
          title: "useOptions",
          href: "/docs/hooks/use-options",
          items: [],
        },
        {
          title: "useSelectedVariant",
          href: "/docs/hooks/use-selected-options",
          items: [],
        },
        {
          title: "useVariant",
          href: "/docs/hooks/use-variant",
          items: [],
        },
        {
          title: "useVariants",
          href: "/docs/hooks/use-variants",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Product Card",
          href: "/docs/components/product-card",
          disabled: false,
          items: [],
        },
        {
          title: "Product Options",
          href: "/docs/components/product-options",
          disabled: false,
          items: [],
        },
        {
          title: "Purchase Options",
          href: "/docs/components/purchase-options",
          disabled: false,
          items: [],
        },
        {
          title: "Product Media",
          href: "/docs/components/product-media",
          disabled: true,
          items: [],
        },
        {
          title: "Reviews",
          href: "/docs/components/reviews",
          disabled: true,
          items: [],
        }
      ],
    },
    {
      title: "Primitives",
      items: [
        {
          title: "Accordion",
          href: "/docs/primitives/accordion",
          items: [],
        },
        {
          title: "Alert Dialog",
          href: "/docs/primitives/alert-dialog",
          items: [],
        },
        {
          title: "Aspect Ratio",
          href: "/docs/primitives/aspect-ratio",
          items: [],
        },
        {
          title: "Avatar",
          href: "/docs/primitives/avatar",
          items: [],
        },
        {
          title: "Button",
          href: "/docs/primitives/button",
          items: [],
        },
        {
          title: "Checkbox",
          href: "/docs/primitives/checkbox",
          items: [],
        },
        {
          title: "Collapsible",
          href: "/docs/primitives/collapsible",
          items: [],
        },
        {
          title: "Context Menu",
          href: "/docs/primitives/context-menu",
          items: [],
        },
        {
          title: "Dialog",
          href: "/docs/primitives/dialog",
          items: [],
        },
        {
          title: "Dropdown Menu",
          href: "/docs/primitives/dropdown-menu",
          items: [],
        },
        {
          title: "Hover Card",
          href: "/docs/primitives/hover-card",
          items: [],
        },
        {
          title: "Input",
          href: "/docs/primitives/input",
          items: [],
        },
        {
          title: "Label",
          href: "/docs/primitives/label",
          items: [],
        },
        {
          title: "Menubar",
          href: "/docs/primitives/menubar",
          items: [],
        },
        {
          title: "Popover",
          href: "/docs/primitives/popover",
          items: [],
        },
        {
          title: "Progress",
          href: "/docs/primitives/progress",
          items: [],
        },
        {
          title: "Radio Group",
          href: "/docs/primitives/radio-group",
          items: [],
        },
        {
          title: "Scroll Area",
          href: "/docs/primitives/scroll-area",
          items: [],
        },
        {
          title: "Select",
          href: "/docs/primitives/select",
          items: [],
        },
        {
          title: "Separator",
          href: "/docs/primitives/separator",
          items: [],
        },
        {
          title: "Slider",
          href: "/docs/primitives/slider",
          items: [],
        },
        {
          title: "Switch",
          href: "/docs/primitives/switch",
          items: [],
        },
        {
          title: "Tabs",
          href: "/docs/primitives/tabs",
          items: [],
        },
        {
          title: "Textarea",
          href: "/docs/primitives/textarea",
          items: [],
        },
        {
          title: "Tooltip",
          href: "/docs/primitives/tooltip",
          items: [],
        },
      ],
    },
  ],
}
