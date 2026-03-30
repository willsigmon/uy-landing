"use client";

import { useState } from "react";
import { FadeIn } from "@/components/fade-in";
import { tap } from "@/lib/haptics";

interface Resource {
  readonly name: string;
  readonly description: string;
  readonly url?: string;
}

interface Category {
  readonly title: string;
  readonly icon: string;
  readonly resources: readonly Resource[];
}

interface ResourceBrowserProps {
  readonly categories: readonly Category[];
}

export function ResourceBrowser({ categories }: ResourceBrowserProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = categories
    .map((cat) => ({
      ...cat,
      resources: cat.resources.filter(
        (r) =>
          (!search ||
            r.name.toLowerCase().includes(search.toLowerCase()) ||
            r.description.toLowerCase().includes(search.toLowerCase())) &&
          (!activeCategory || cat.title === activeCategory)
      ),
    }))
    .filter((cat) => cat.resources.length > 0);

  const totalResults = filtered.reduce((sum, cat) => sum + cat.resources.length, 0);

  return (
    <>
      {/* Search bar */}
      <div className="relative">
        <input
          type="search"
          placeholder="Search resources..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-2xl border-2 border-border bg-card px-4 py-3 pl-10 text-sm text-foreground placeholder-muted-foreground outline-none focus:border-primary"
        />
        <svg
          className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        {search && (
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
            {totalResults} results
          </span>
        )}
      </div>

      {/* Category filter chips */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => { tap(); setActiveCategory(null); }}
          className={`app-chip transition-all ${!activeCategory ? "border-primary bg-primary/10" : ""}`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.title}
            onClick={() => { tap(); setActiveCategory(activeCategory === cat.title ? null : cat.title); }}
            className={`app-chip transition-all ${activeCategory === cat.title ? "border-primary bg-primary/10" : ""}`}
          >
            {cat.icon} {cat.title.split(" ")[0]}
          </button>
        ))}
      </div>

      {/* Results */}
      {filtered.map((category) => (
        <FadeIn key={category.title}>
          <section className="flex flex-col gap-3">
            <h2 className="flex items-center gap-2 font-display text-lg tracking-tight text-foreground">
              <span role="img" aria-hidden="true">{category.icon}</span>
              {category.title}
              <span className="ml-auto text-xs font-normal text-muted-foreground">
                {category.resources.length}
              </span>
            </h2>
            <div className="flex flex-col gap-2">
              {category.resources.map((resource) => (
                <div
                  key={resource.name}
                  className="rounded-2xl border-2 border-border bg-card p-4 hover-lift"
                >
                  <div className="flex flex-col gap-1">
                    {resource.url ? (
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => tap()}
                        className="font-semibold text-foreground underline decoration-border hover:decoration-foreground"
                      >
                        {resource.name}
                      </a>
                    ) : (
                      <p className="font-semibold text-foreground">{resource.name}</p>
                    )}
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {resource.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>
      ))}

      {filtered.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-lg font-semibold text-foreground">No resources found</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try a different search term or clear the category filter.
          </p>
        </div>
      )}
    </>
  );
}
