import { DOCUMENT, Injectable, effect, inject, signal } from '@angular/core';

import { DEFAULT_LANG, LANG_PARAM } from './consts';
import { isLang } from './helpers';
import { LANGS, Lang } from './types';

@Injectable({ providedIn: 'root' })
export class LangService {
  private readonly document = inject(DOCUMENT);
  private readonly current = signal(this.fromUrl());

  readonly langs = LANGS;
  readonly lang = this.current.asReadonly();

  constructor() {
    effect(() => {
      const lang = this.current();

      this.document.documentElement.lang = lang;
      this.writeToUrl(lang);
    });
  }

  set(lang: Lang): void {
    this.current.set(lang);
  }

  private fromUrl(): Lang {
    const view = this.document.defaultView;

    if (!view) {
      return DEFAULT_LANG;
    }

    const value = new URLSearchParams(view.location.search).get(LANG_PARAM)?.toLowerCase() ?? null;

    return isLang(value) ? value : DEFAULT_LANG;
  }

  private writeToUrl(lang: Lang): void {
    const view = this.document.defaultView;

    if (!view) {
      return;
    }

    const url = new URL(view.location.href);
    url.searchParams.set(LANG_PARAM, lang);
    view.history.replaceState(null, '', url);
  }
}
