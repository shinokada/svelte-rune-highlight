import { T as head, S as pop, Q as push, V as attr, W as stringify, X as escape_html, Y as spread_attributes, R as setContext, Z as getContext, _ as ensure_array_like, $ as store_get, a0 as unsubscribe_stores, a1 as spread_props } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { d as darkmode, f as footer, a as footerBrand, b as footerLi, c as footerUl, n as navbar, e as navbrand, g as navLi, h as navUl } from "../../chunks/theme.js";
import { w as writable } from "../../chunks/index2.js";
function Runatics($$payload, $$props) {
  push();
  let { analyticsId } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.out += `<script async${attr("src", `https://www.googletagmanager.com/gtag/js?id=${stringify(analyticsId)}`)}><\/script><!---->`;
  });
  if (!analyticsId) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h2>You need to provide your Google Analytics ID, "ANALYTICS_ID", in .env file.</h2> <p>Please read the <a href="https://runatics.codewithshin.com/">docs</a> how to set it up.</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function deepMerge(target, source) {
  const merged = { ...target };
  for (const key in source) {
    if (key in target) {
      const targetValue = target[key];
      const sourceValue = source[key];
      if (sourceValue && targetValue && typeof sourceValue === "object" && typeof targetValue === "object" && !Array.isArray(sourceValue) && !Array.isArray(targetValue)) {
        merged[key] = deepMerge(targetValue, sourceValue);
      } else if (sourceValue !== void 0) {
        merged[key] = sourceValue;
      }
    }
  }
  return merged;
}
function RunesMetaTags($$payload, $$props) {
  push();
  let {
    title,
    robots,
    description,
    keywords,
    twitter,
    og
  } = $$props;
  head($$payload, ($$payload2) => {
    if (title) {
      $$payload2.out += "<!--[-->";
      $$payload2.title = `<title>${escape_html(title)}</title>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (description) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="description"${attr("content", description)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (keywords) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="keywords"${attr("content", keywords)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (robots !== false) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="robots" content="index,follow">`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (twitter) {
      $$payload2.out += "<!--[-->";
      if (twitter?.card) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:card"${attr("content", twitter.card)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter?.handle) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:creator"${attr("content", twitter.handle)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter?.title) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:title"${attr("content", twitter.title)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter?.site) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:site"${attr("content", twitter.site)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter?.description) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:description"${attr("content", twitter.description)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter?.image) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:image"${attr("content", twitter.image)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter?.imageAlt) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:image:alt"${attr("content", twitter.imageAlt)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (og) {
      $$payload2.out += "<!--[-->";
      if (og?.url) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:url"${attr("content", og.url)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.type) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:type"${attr("content", og.type)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.title) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:title"${attr("content", og.title)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.description) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:description"${attr("content", og.description)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.image) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:image"${attr("content", og.image)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.imageAlt) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:image:alt"${attr("content", og.imageAlt)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.imageWidth) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:image:width"${attr("content", og.imageWidth)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.imageHeight) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:image:height"${attr("content", og.imageHeight)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.siteName) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:site_name"${attr("content", og.siteName)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
  });
  pop();
}
function uiHelpers() {
  let isOpen = false;
  function toggle() {
    isOpen = !isOpen;
  }
  function close() {
    isOpen = false;
  }
  function open() {
    isOpen = true;
  }
  return {
    get isOpen() {
      return isOpen;
    },
    set isOpen(value) {
      isOpen = value;
    },
    toggle,
    close,
    open
  };
}
function Darkmode($$payload, $$props) {
  push();
  let {
    class: className,
    lightIcon,
    darkIcon,
    size = "md",
    ariaLabel = "Dark mode",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const btnCls = darkmode({ class: className });
  const sizes = { sm: "w-4 h-4", md: "w-5 h-5", lg: "w-6 h-6" };
  head($$payload, ($$payload2) => {
    $$payload2.out += `<script>
    if ("THEME_PREFERENCE_KEY" in localStorage) {
      localStorage.getItem("THEME_PREFERENCE_KEY") === "dark" ? window.document.documentElement.classList.add("dark") : window.document.documentElement.classList.remove("dark");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) window.document.documentElement.classList.add("dark");
    }
  <\/script><!---->`;
  });
  $$payload.out += `<button${spread_attributes({
    "aria-label": ariaLabel,
    type: "button",
    ...restProps,
    class: btnCls
  })}><span class="hidden dark:block">`;
  if (lightIcon) {
    $$payload.out += "<!--[-->";
    lightIcon($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<svg role="img" aria-label="Light mode"${attr("class", sizes[size])} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1
    0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`;
  }
  $$payload.out += `<!--]--></span> <span class="block dark:hidden">`;
  if (darkIcon) {
    $$payload.out += "<!--[-->";
    darkIcon($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<svg role="img" aria-label="Dark mode"${attr("class", sizes[size])} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>`;
  }
  $$payload.out += `<!--]--></span></button>`;
  pop();
}
function Footer($$payload, $$props) {
  push();
  let {
    children,
    footerType = "default",
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const footerCls = footer({ footerType, className });
  $$payload.out += `<footer${spread_attributes({ ...restProps, class: footerCls })}>`;
  children($$payload);
  $$payload.out += `<!----></footer>`;
  pop();
}
function FooterBrand($$payload, $$props) {
  push();
  let {
    children,
    aClass,
    spanClass,
    imgClass,
    href,
    src,
    alt,
    name,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, span, img } = footerBrand();
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes({
      ...restProps,
      href,
      class: base({ class: aClass })
    })}>`;
    if (src) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<img${attr("src", src)}${attr("class", img({ class: imgClass }))}${attr("alt", alt)}>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (name) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span${attr("class", span({ class: spanClass }))}>${escape_html(name)}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (children) {
      $$payload.out += "<!--[-->";
      children($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<img${attr("src", src)}${attr("class", img({ class: imgClass }))}${attr("alt", alt)}>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function FooterLi($$payload, $$props) {
  push();
  let {
    children,
    liClass,
    aClass,
    href,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, link } = footerLi();
  $$payload.out += `<li${attr("class", base({ class: liClass }))}><a${spread_attributes({
    ...restProps,
    href,
    class: link({ class: aClass })
  })}>`;
  children($$payload);
  $$payload.out += `<!----></a></li>`;
  pop();
}
function FooterUl($$payload, $$props) {
  push();
  let {
    class: ulClass,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const base = footerUl({ class: ulClass });
  $$payload.out += `<ul${spread_attributes({ ...restProps, class: base })}>`;
  children($$payload);
  $$payload.out += `<!----></ul>`;
  pop();
}
function Navbar($$payload, $$props) {
  push();
  let {
    children,
    navSlotBlock,
    navSlotHiddenTop,
    navSlotHiddenBottom,
    toggleNav,
    closeNav = () => {
    },
    navStatus,
    fluid,
    brand,
    hamburgerMenu = true,
    breakPoint = "md",
    navClass,
    divClass,
    btnClass,
    div2Class,
    activeClass,
    nonActiveClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const {
    base,
    container,
    toggleButton,
    menuContainer,
    activeLink,
    inactiveLink
  } = navbar({ fluid, breakPoint, navStatus });
  setContext("navbarContext", {
    navStatus,
    breakPoint,
    get activeClass() {
      return activeLink({ class: activeClass });
    },
    get nonActiveClass() {
      return inactiveLink({ class: nonActiveClass });
    },
    closeNav
  });
  function getMenuProps(isOpen) {
    return isOpen ? { role: "menu", tabindex: 0 } : { role: "none", tabindex: -1 };
  }
  $$payload.out += `<nav${spread_attributes({
    ...restProps,
    class: base({ class: navClass })
  })}><div${attr("class", container({ class: divClass }))}>`;
  if (brand) {
    $$payload.out += "<!--[-->";
    brand($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (hamburgerMenu) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button type="button"${attr("class", toggleButton({ class: btnClass }))}><span class="sr-only">Open main menu</span> <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg></button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (navSlotBlock) {
    $$payload.out += "<!--[-->";
    navSlotBlock($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (navStatus) {
    $$payload.out += "<!--[-->";
    if (navSlotHiddenTop) {
      $$payload.out += "<!--[-->";
      navSlotHiddenTop($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div${spread_attributes({
      class: menuContainer({ class: div2Class }),
      ...getMenuProps(true)
    })}>`;
    children($$payload);
    $$payload.out += `<!----></div> `;
    if (navSlotHiddenBottom) {
      $$payload.out += "<!--[-->";
      navSlotHiddenBottom($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({
      class: menuContainer({ class: div2Class }),
      ...getMenuProps(false)
    })}>`;
    children($$payload);
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]--></div></nav>`;
  pop();
}
function NavBrand($$payload, $$props) {
  push();
  let {
    children,
    siteName,
    closeNav,
    aClass,
    spanClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const context = getContext("navbarContext");
  closeNav = context.closeNav ?? closeNav;
  const { base, span } = navbrand();
  $$payload.out += `<a${spread_attributes({
    href: "/",
    ...restProps,
    class: base({ class: aClass })
  })}>`;
  if (children) {
    $$payload.out += "<!--[-->";
    children($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (siteName) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<span${attr("class", span({ class: spanClass }))}>${escape_html(siteName)}</span>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></a>`;
  pop();
}
function NavLi($$payload, $$props) {
  push();
  let {
    closeNav,
    href,
    children,
    aClass,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let breakPoint;
  const context = getContext("navbarContext");
  breakPoint = context.breakPoint ?? "md";
  closeNav = context.closeNav ?? closeNav;
  const activeUrlStore = getContext("activeUrl");
  let navUrl = "";
  activeUrlStore.subscribe((value) => {
    navUrl = value;
  });
  let isActive = navUrl ? href === navUrl : false;
  const { base, link } = navLi({ active: isActive, breakPoint });
  $$payload.out += `<li${attr("class", base({ class: className }))}><a${spread_attributes({
    href,
    ...restProps,
    "aria-current": isActive,
    class: link({ class: aClass })
  })}>`;
  children($$payload);
  $$payload.out += `<!----></a></li>`;
  pop();
}
function NavUl($$payload, $$props) {
  push();
  let {
    children,
    activeUrl = "",
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let breakPoint;
  const context = getContext("navbarContext");
  breakPoint = context.breakPoint ?? "md";
  const base = navUl({ breakPoint, className });
  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);
  $$payload.out += `<ul${spread_attributes({ ...restProps, class: base })}>`;
  children($$payload);
  $$payload.out += `<!----></ul>`;
  pop();
}
function DynamicCodeBlockStyle($$payload, $$props) {
  push();
  const stylesImport = /* @__PURE__ */ Object.assign({ "./highlight/styles/3024.css": () => Promise.resolve({           }), "./highlight/styles/a11y-dark.css": () => Promise.resolve({                }), "./highlight/styles/a11y-light.css": () => Promise.resolve({                 }), "./highlight/styles/agate.css": () => Promise.resolve({            }), "./highlight/styles/an-old-hope.css": () => Promise.resolve({                  }), "./highlight/styles/androidstudio.css": () => Promise.resolve({                    }), "./highlight/styles/apathy.css": () => Promise.resolve({             }), "./highlight/styles/apprentice.css": () => Promise.resolve({                 }), "./highlight/styles/arduino-light.css": () => Promise.resolve({                    }), "./highlight/styles/arta.css": () => Promise.resolve({           }), "./highlight/styles/ascetic.css": () => Promise.resolve({              }), "./highlight/styles/ashes.css": () => Promise.resolve({            }), "./highlight/styles/atelier-cave-light.css": () => Promise.resolve({                         }), "./highlight/styles/atelier-cave.css": () => Promise.resolve({                   }), "./highlight/styles/atelier-dune-light.css": () => Promise.resolve({                         }), "./highlight/styles/atelier-dune.css": () => Promise.resolve({                   }), "./highlight/styles/atelier-estuary-light.css": () => Promise.resolve({                            }), "./highlight/styles/atelier-estuary.css": () => Promise.resolve({                      }), "./highlight/styles/atelier-forest-light.css": () => Promise.resolve({                           }), "./highlight/styles/atelier-forest.css": () => Promise.resolve({                     }), "./highlight/styles/atelier-heath-light.css": () => Promise.resolve({                          }), "./highlight/styles/atelier-heath.css": () => Promise.resolve({                    }), "./highlight/styles/atelier-lakeside-light.css": () => Promise.resolve({                             }), "./highlight/styles/atelier-lakeside.css": () => Promise.resolve({                       }), "./highlight/styles/atelier-plateau-light.css": () => Promise.resolve({                            }), "./highlight/styles/atelier-plateau.css": () => Promise.resolve({                      }), "./highlight/styles/atelier-savanna-light.css": () => Promise.resolve({                            }), "./highlight/styles/atelier-savanna.css": () => Promise.resolve({                      }), "./highlight/styles/atelier-seaside-light.css": () => Promise.resolve({                            }), "./highlight/styles/atelier-seaside.css": () => Promise.resolve({                      }), "./highlight/styles/atelier-sulphurpool-light.css": () => Promise.resolve({                                }), "./highlight/styles/atelier-sulphurpool.css": () => Promise.resolve({                          }), "./highlight/styles/atlas.css": () => Promise.resolve({            }), "./highlight/styles/atom-one-dark-reasonable.css": () => Promise.resolve({                               }), "./highlight/styles/atom-one-dark.css": () => Promise.resolve({                    }), "./highlight/styles/atom-one-light.css": () => Promise.resolve({                     }), "./highlight/styles/base16-github.css": () => Promise.resolve({                    }), "./highlight/styles/base16-ir-black.css": () => Promise.resolve({                      }), "./highlight/styles/base16-monokai.css": () => Promise.resolve({                     }), "./highlight/styles/base16-nord.css": () => Promise.resolve({                  }), "./highlight/styles/bespin.css": () => Promise.resolve({             }), "./highlight/styles/black-metal-bathory.css": () => Promise.resolve({                          }), "./highlight/styles/black-metal-burzum.css": () => Promise.resolve({                         }), "./highlight/styles/black-metal-dark-funeral.css": () => Promise.resolve({                               }), "./highlight/styles/black-metal-gorgoroth.css": () => Promise.resolve({                            }), "./highlight/styles/black-metal-immortal.css": () => Promise.resolve({                           }), "./highlight/styles/black-metal-khold.css": () => Promise.resolve({                        }), "./highlight/styles/black-metal-marduk.css": () => Promise.resolve({                         }), "./highlight/styles/black-metal-mayhem.css": () => Promise.resolve({                         }), "./highlight/styles/black-metal-nile.css": () => Promise.resolve({                       }), "./highlight/styles/black-metal-venom.css": () => Promise.resolve({                        }), "./highlight/styles/black-metal.css": () => Promise.resolve({                  }), "./highlight/styles/brewer.css": () => Promise.resolve({             }), "./highlight/styles/bright.css": () => Promise.resolve({             }), "./highlight/styles/brogrammer.css": () => Promise.resolve({                 }), "./highlight/styles/brown-paper.css": () => Promise.resolve({                  }), "./highlight/styles/brush-trees-dark.css": () => Promise.resolve({                       }), "./highlight/styles/brush-trees.css": () => Promise.resolve({                  }), "./highlight/styles/chalk.css": () => Promise.resolve({            }), "./highlight/styles/circus.css": () => Promise.resolve({             }), "./highlight/styles/classic-dark.css": () => Promise.resolve({                   }), "./highlight/styles/classic-light.css": () => Promise.resolve({                    }), "./highlight/styles/codepen-embed.css": () => Promise.resolve({                    }), "./highlight/styles/codeschool.css": () => Promise.resolve({                 }), "./highlight/styles/color-brewer.css": () => Promise.resolve({                   }), "./highlight/styles/colors.css": () => Promise.resolve({             }), "./highlight/styles/cupcake.css": () => Promise.resolve({              }), "./highlight/styles/cupertino.css": () => Promise.resolve({                }), "./highlight/styles/danqing.css": () => Promise.resolve({              }), "./highlight/styles/darcula.css": () => Promise.resolve({              }), "./highlight/styles/dark-violet.css": () => Promise.resolve({                  }), "./highlight/styles/dark.css": () => Promise.resolve({           }), "./highlight/styles/darkmoss.css": () => Promise.resolve({               }), "./highlight/styles/darktooth.css": () => Promise.resolve({                }), "./highlight/styles/decaf.css": () => Promise.resolve({            }), "./highlight/styles/default-dark.css": () => Promise.resolve({                   }), "./highlight/styles/default-light.css": () => Promise.resolve({                    }), "./highlight/styles/default.css": () => Promise.resolve({              }), "./highlight/styles/devibeans.css": () => Promise.resolve({                }), "./highlight/styles/dirtysea.css": () => Promise.resolve({               }), "./highlight/styles/docco.css": () => Promise.resolve({            }), "./highlight/styles/dracula.css": () => Promise.resolve({              }), "./highlight/styles/edge-dark.css": () => Promise.resolve({                }), "./highlight/styles/edge-light.css": () => Promise.resolve({                 }), "./highlight/styles/eighties.css": () => Promise.resolve({               }), "./highlight/styles/embers.css": () => Promise.resolve({             }), "./highlight/styles/equilibrium-dark.css": () => Promise.resolve({                       }), "./highlight/styles/equilibrium-gray-dark.css": () => Promise.resolve({                            }), "./highlight/styles/equilibrium-gray-light.css": () => Promise.resolve({                             }), "./highlight/styles/equilibrium-light.css": () => Promise.resolve({                        }), "./highlight/styles/espresso.css": () => Promise.resolve({               }), "./highlight/styles/eva-dim.css": () => Promise.resolve({              }), "./highlight/styles/eva.css": () => Promise.resolve({          }), "./highlight/styles/far.css": () => Promise.resolve({          }), "./highlight/styles/felipec.css": () => Promise.resolve({              }), "./highlight/styles/flat.css": () => Promise.resolve({           }), "./highlight/styles/foundation.css": () => Promise.resolve({                 }), "./highlight/styles/framer.css": () => Promise.resolve({             }), "./highlight/styles/fruit-soda.css": () => Promise.resolve({                 }), "./highlight/styles/gigavolt.css": () => Promise.resolve({               }), "./highlight/styles/github-dark-dimmed.css": () => Promise.resolve({                         }), "./highlight/styles/github-dark.css": () => Promise.resolve({                  }), "./highlight/styles/github.css": () => Promise.resolve({             }), "./highlight/styles/gml.css": () => Promise.resolve({          }), "./highlight/styles/google-dark.css": () => Promise.resolve({                  }), "./highlight/styles/google-light.css": () => Promise.resolve({                   }), "./highlight/styles/googlecode.css": () => Promise.resolve({                 }), "./highlight/styles/gradient-dark.css": () => Promise.resolve({                    }), "./highlight/styles/gradient-light.css": () => Promise.resolve({                     }), "./highlight/styles/grayscale-dark.css": () => Promise.resolve({                     }), "./highlight/styles/grayscale-light.css": () => Promise.resolve({                      }), "./highlight/styles/grayscale.css": () => Promise.resolve({                }), "./highlight/styles/green-screen.css": () => Promise.resolve({                   }), "./highlight/styles/gruvbox-dark-hard.css": () => Promise.resolve({                        }), "./highlight/styles/gruvbox-dark-medium.css": () => Promise.resolve({                          }), "./highlight/styles/gruvbox-dark-pale.css": () => Promise.resolve({                        }), "./highlight/styles/gruvbox-dark-soft.css": () => Promise.resolve({                        }), "./highlight/styles/gruvbox-light-hard.css": () => Promise.resolve({                         }), "./highlight/styles/gruvbox-light-medium.css": () => Promise.resolve({                           }), "./highlight/styles/gruvbox-light-soft.css": () => Promise.resolve({                         }), "./highlight/styles/hardcore.css": () => Promise.resolve({               }), "./highlight/styles/harmonic16-dark.css": () => Promise.resolve({                      }), "./highlight/styles/harmonic16-light.css": () => Promise.resolve({                       }), "./highlight/styles/heetch-dark.css": () => Promise.resolve({                  }), "./highlight/styles/heetch-light.css": () => Promise.resolve({                   }), "./highlight/styles/helios.css": () => Promise.resolve({             }), "./highlight/styles/hopscotch.css": () => Promise.resolve({                }), "./highlight/styles/horizon-dark.css": () => Promise.resolve({                   }), "./highlight/styles/horizon-light.css": () => Promise.resolve({                    }), "./highlight/styles/humanoid-dark.css": () => Promise.resolve({                    }), "./highlight/styles/humanoid-light.css": () => Promise.resolve({                     }), "./highlight/styles/hybrid.css": () => Promise.resolve({             }), "./highlight/styles/ia-dark.css": () => Promise.resolve({              }), "./highlight/styles/ia-light.css": () => Promise.resolve({               }), "./highlight/styles/icy-dark.css": () => Promise.resolve({               }), "./highlight/styles/idea.css": () => Promise.resolve({           }), "./highlight/styles/intellij-light.css": () => Promise.resolve({                     }), "./highlight/styles/ir-black.css": () => Promise.resolve({               }), "./highlight/styles/isbl-editor-dark.css": () => Promise.resolve({                       }), "./highlight/styles/isbl-editor-light.css": () => Promise.resolve({                        }), "./highlight/styles/isotope.css": () => Promise.resolve({              }), "./highlight/styles/kimber.css": () => Promise.resolve({             }), "./highlight/styles/kimbie-dark.css": () => Promise.resolve({                  }), "./highlight/styles/kimbie-light.css": () => Promise.resolve({                   }), "./highlight/styles/lightfair.css": () => Promise.resolve({                }), "./highlight/styles/lioshi.css": () => Promise.resolve({             }), "./highlight/styles/london-tube.css": () => Promise.resolve({                  }), "./highlight/styles/macintosh.css": () => Promise.resolve({                }), "./highlight/styles/magula.css": () => Promise.resolve({             }), "./highlight/styles/marrakesh.css": () => Promise.resolve({                }), "./highlight/styles/materia.css": () => Promise.resolve({              }), "./highlight/styles/material-darker.css": () => Promise.resolve({                      }), "./highlight/styles/material-lighter.css": () => Promise.resolve({                       }), "./highlight/styles/material-palenight.css": () => Promise.resolve({                         }), "./highlight/styles/material-vivid.css": () => Promise.resolve({                     }), "./highlight/styles/material.css": () => Promise.resolve({               }), "./highlight/styles/mellow-purple.css": () => Promise.resolve({                    }), "./highlight/styles/mexico-light.css": () => Promise.resolve({                   }), "./highlight/styles/mocha.css": () => Promise.resolve({            }), "./highlight/styles/mono-blue.css": () => Promise.resolve({                }), "./highlight/styles/monokai-sublime.css": () => Promise.resolve({                      }), "./highlight/styles/monokai.css": () => Promise.resolve({              }), "./highlight/styles/nebula.css": () => Promise.resolve({             }), "./highlight/styles/night-owl.css": () => Promise.resolve({                }), "./highlight/styles/nnfx-dark.css": () => Promise.resolve({                }), "./highlight/styles/nnfx-light.css": () => Promise.resolve({                 }), "./highlight/styles/nord.css": () => Promise.resolve({           }), "./highlight/styles/nova.css": () => Promise.resolve({           }), "./highlight/styles/obsidian.css": () => Promise.resolve({               }), "./highlight/styles/ocean.css": () => Promise.resolve({            }), "./highlight/styles/oceanicnext.css": () => Promise.resolve({                  }), "./highlight/styles/one-light.css": () => Promise.resolve({                }), "./highlight/styles/onedark.css": () => Promise.resolve({              }), "./highlight/styles/outrun-dark.css": () => Promise.resolve({                  }), "./highlight/styles/panda-syntax-dark.css": () => Promise.resolve({                        }), "./highlight/styles/panda-syntax-light.css": () => Promise.resolve({                         }), "./highlight/styles/papercolor-dark.css": () => Promise.resolve({                      }), "./highlight/styles/papercolor-light.css": () => Promise.resolve({                       }), "./highlight/styles/paraiso-dark.css": () => Promise.resolve({                   }), "./highlight/styles/paraiso-light.css": () => Promise.resolve({                    }), "./highlight/styles/paraiso.css": () => Promise.resolve({              }), "./highlight/styles/pasque.css": () => Promise.resolve({             }), "./highlight/styles/phd.css": () => Promise.resolve({          }), "./highlight/styles/pico.css": () => Promise.resolve({           }), "./highlight/styles/pojoaque.css": () => Promise.resolve({               }), "./highlight/styles/pop.css": () => Promise.resolve({          }), "./highlight/styles/porple.css": () => Promise.resolve({             }), "./highlight/styles/purebasic.css": () => Promise.resolve({                }), "./highlight/styles/qtcreator-dark.css": () => Promise.resolve({                     }), "./highlight/styles/qtcreator-light.css": () => Promise.resolve({                      }), "./highlight/styles/qualia.css": () => Promise.resolve({             }), "./highlight/styles/railscasts.css": () => Promise.resolve({                 }), "./highlight/styles/rainbow.css": () => Promise.resolve({              }), "./highlight/styles/rebecca.css": () => Promise.resolve({              }), "./highlight/styles/ros-pine-dawn.css": () => Promise.resolve({                    }), "./highlight/styles/ros-pine-moon.css": () => Promise.resolve({                    }), "./highlight/styles/ros-pine.css": () => Promise.resolve({               }), "./highlight/styles/routeros.css": () => Promise.resolve({               }), "./highlight/styles/sagelight.css": () => Promise.resolve({                }), "./highlight/styles/sandcastle.css": () => Promise.resolve({                 }), "./highlight/styles/school-book.css": () => Promise.resolve({                  }), "./highlight/styles/seti-ui.css": () => Promise.resolve({              }), "./highlight/styles/shades-of-purple.css": () => Promise.resolve({                       }), "./highlight/styles/shapeshifter.css": () => Promise.resolve({                   }), "./highlight/styles/silk-dark.css": () => Promise.resolve({                }), "./highlight/styles/silk-light.css": () => Promise.resolve({                 }), "./highlight/styles/snazzy.css": () => Promise.resolve({             }), "./highlight/styles/solar-flare-light.css": () => Promise.resolve({                        }), "./highlight/styles/solar-flare.css": () => Promise.resolve({                  }), "./highlight/styles/solarized-dark.css": () => Promise.resolve({                     }), "./highlight/styles/solarized-light.css": () => Promise.resolve({                      }), "./highlight/styles/spacemacs.css": () => Promise.resolve({                }), "./highlight/styles/srcery.css": () => Promise.resolve({             }), "./highlight/styles/stackoverflow-dark.css": () => Promise.resolve({                         }), "./highlight/styles/stackoverflow-light.css": () => Promise.resolve({                          }), "./highlight/styles/summercamp.css": () => Promise.resolve({                 }), "./highlight/styles/summerfruit-dark.css": () => Promise.resolve({                       }), "./highlight/styles/summerfruit-light.css": () => Promise.resolve({                        }), "./highlight/styles/sunburst.css": () => Promise.resolve({               }), "./highlight/styles/synth-midnight-terminal-dark.css": () => Promise.resolve({                                   }), "./highlight/styles/synth-midnight-terminal-light.css": () => Promise.resolve({                                    }), "./highlight/styles/tango.css": () => Promise.resolve({            }), "./highlight/styles/tender.css": () => Promise.resolve({             }), "./highlight/styles/tokyo-night-dark.css": () => Promise.resolve({                       }), "./highlight/styles/tokyo-night-light.css": () => Promise.resolve({                        }), "./highlight/styles/tomorrow-night-blue.css": () => Promise.resolve({                          }), "./highlight/styles/tomorrow-night-bright.css": () => Promise.resolve({                            }), "./highlight/styles/tomorrow-night.css": () => Promise.resolve({                     }), "./highlight/styles/tomorrow.css": () => Promise.resolve({               }), "./highlight/styles/twilight.css": () => Promise.resolve({               }), "./highlight/styles/unikitty-dark.css": () => Promise.resolve({                    }), "./highlight/styles/unikitty-light.css": () => Promise.resolve({                     }), "./highlight/styles/vs.css": () => Promise.resolve({         }), "./highlight/styles/vs2015.css": () => Promise.resolve({             }), "./highlight/styles/vulcan.css": () => Promise.resolve({             }), "./highlight/styles/windows-10-light.css": () => Promise.resolve({                       }), "./highlight/styles/windows-10.css": () => Promise.resolve({                 }), "./highlight/styles/windows-95-light.css": () => Promise.resolve({                       }), "./highlight/styles/windows-95.css": () => Promise.resolve({                 }), "./highlight/styles/windows-high-contrast-light.css": () => Promise.resolve({                                  }), "./highlight/styles/windows-high-contrast.css": () => Promise.resolve({                            }), "./highlight/styles/windows-nt-light.css": () => Promise.resolve({                       }), "./highlight/styles/windows-nt.css": () => Promise.resolve({                 }), "./highlight/styles/woodland.css": () => Promise.resolve({               }), "./highlight/styles/xcode-dusk.css": () => Promise.resolve({                 }), "./highlight/styles/xcode.css": () => Promise.resolve({            }), "./highlight/styles/xt256.css": () => Promise.resolve({            }), "./highlight/styles/zenburn.css": () => Promise.resolve({              }) });
  const styles = Object.entries(stylesImport).map(([path]) => ({
    value: path.slice(path.lastIndexOf("/") + 1, -4),
    name: path.slice(path.lastIndexOf("/") + 1, -4)
  }));
  const each_array = ensure_array_like(styles);
  $$payload.out += `<select class="w-32 border border-gray-200 p-1 text-gray-800 dark:text-gray-800 md:w-36"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let theme = each_array[$$index];
    $$payload.out += `<option${attr("value", theme.value)}>${escape_html(theme.value)}</option>`;
  }
  $$payload.out += `<!--]--></select>`;
  pop();
}
function GitHub($$payload, $$props) {
  let { size = "lg" } = $$props;
  const sizes = { sm: "w-4 h-4", md: "w-5 h-5", lg: "w-6 h-6" };
  $$payload.out += `<svg${attr("class", sizes[size])} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false" data-icon="github" role="img"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>`;
}
function Bluesky($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  let {
    size = ctx.size || "24",
    role = ctx.role || "img",
    ariaLabel = "bluesky",
    class: classname,
    title,
    desc,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      class: classname,
      ...restProps,
      "aria-label": ariaLabel,
      role,
      viewBox: "0 0 512 512",
      "aria-describedby": hasDescription ? ariaDescribedby : void 0
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path d="m0 0H512V512H0" fill="none"></path><path d="M159 126c-28-22-74-38-74 14 0 11 6 88 9 101 13 43 57 54 97 48-69 11-87 50-49 89 72 75 104-18 112-42l2-5 2 5c8 24 40 117 112 42 38-39 20-78-49-89 40 6 84-5 97-48 3-13 9-90 9-101 0-52-46-36-74-14-39 29-82 89-97 121-15-32-58-92-97-121Z" fill="#1185fe"></path></svg>`;
  pop();
}
function Nav($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  let nav = uiHelpers();
  let navStatus = false;
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  let divClass = "ml-auto w-full";
  let ulclass = "flex flex-col py-3 lg:flex-row lg:my-0 order-1 font-medium dark:lg:bg-transparent lg:bg-white lg:border-0 lg:space-x-2 xl:space-x-4";
  let navClass = "w-full divide-gray-200 border-gray-200 bg-white text-gray-500 dark:divide-gray-700 dark:border-gray-700 dark:transparent dark:text-gray-400 sm:px-4";
  $$payload.out += `<header class="sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">`;
  {
    let brand = function($$payload2) {
      NavBrand($$payload2, {
        siteName: "Svelte Rune Highlight",
        spanClass: "sm:text-2xl"
      });
      $$payload2.out += `<!----> <div class="ml-auto flex items-center lg:order-1"><a class="hidden whitespace-normal rounded-lg p-2.5 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-0 focus:ring-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:inline-block" href="https://bsky.app/profile/shinichiokada.bsky.social">`;
      Bluesky($$payload2, {});
      $$payload2.out += `<!----></a> <a class="hidden whitespace-normal rounded-lg p-2.5 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-0 focus:ring-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:inline-block" href="https://github.com/shinokada/svelte-rune-highlight">`;
      GitHub($$payload2, {});
      $$payload2.out += `<!----></a> `;
      Darkmode($$payload2, {
        class: "mr-4 inline-block hover:text-gray-900 dark:hover:text-white"
      });
      $$payload2.out += `<!----> `;
      DynamicCodeBlockStyle($$payload2);
      $$payload2.out += `<!----></div>`;
    };
    Navbar($$payload, {
      navClass,
      toggleNav,
      closeNav,
      navStatus,
      breakPoint: "lg",
      fluid: true,
      div2Class: divClass,
      brand,
      children: ($$payload2) => {
        NavUl($$payload2, {
          activeUrl,
          class: ulclass,
          children: ($$payload3) => {
            NavLi($$payload3, {
              href: "/",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Home`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              href: "/highlight",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Highlight`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              href: "/auto",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Auto`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              href: "/svelte",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Svelte`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              href: "/line-numbers",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Line Numbers`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              href: "/extend",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Extend`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
      },
      $$slots: { brand: true, default: true }
    });
  }
  $$payload.out += `<!----></header>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Footer_1($$payload) {
  Footer($$payload, {
    class: "rounded-none border-t border-gray-200 shadow-none dark:border-gray-600 dark:bg-gray-900",
    footerType: "logo",
    children: ($$payload2) => {
      $$payload2.out += `<div class="mx-auto max-w-7xl sm:flex sm:items-center sm:justify-between">`;
      FooterBrand($$payload2, {
        href: "https://www.codewithshin.com/",
        name: "codewithshin.com"
      });
      $$payload2.out += `<!----> `;
      FooterUl($$payload2, {
        class: "mt-3 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0",
        children: ($$payload3) => {
          FooterLi($$payload3, {
            href: "/highlight",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Highlight`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            href: "/auto",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Auto`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            href: "/svelte",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Svelte`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            href: "/line-numbers",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Line Numbers`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            href: "/extend",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Extend`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div>`;
    },
    $$slots: { default: true }
  });
}
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let { children, data } = $$props;
  const analyticsId = data.ANALYTICS_ID;
  let metaTags = store_get($$store_subs ??= {}, "$page", page).data.pageMetaTags ? deepMerge(store_get($$store_subs ??= {}, "$page", page).data.layoutMetaTags, store_get($$store_subs ??= {}, "$page", page).data.pageMetaTags) : data.layoutMetaTags;
  Runatics($$payload, { analyticsId });
  $$payload.out += `<!----> `;
  RunesMetaTags($$payload, spread_props([metaTags]));
  $$payload.out += `<!----> `;
  Nav($$payload);
  $$payload.out += `<!----> <div class="mx-auto min-w-0 max-w-5xl flex-auto p-8 pb-20 md:static md:max-h-full md:overflow-visible">`;
  children($$payload);
  $$payload.out += `<!----></div> `;
  Footer_1($$payload);
  $$payload.out += `<!---->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
