import { TestBed } from '@angular/core/testing';
import { App } from './app';

/** Finds a bar button by its visible label, ignoring the leading icon ligature. */
function buttonLabelled(root: HTMLElement, label: string): HTMLButtonElement {
  const buttons = Array.from(root.querySelectorAll<HTMLButtonElement>('ocv-button button'));
  const button = buttons.find((b) => (b.textContent ?? '').trim().endsWith(label));

  if (!button) {
    throw new Error(`No button labelled "${label}"`);
  }

  return button;
}

describe('App', () => {
  beforeEach(async () => {
    localStorage.clear();
    delete document.documentElement.dataset['theme'];

    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  afterEach(() => {
    localStorage.clear();
    delete document.documentElement.dataset['theme'];
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the name and title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Timofei Colin');
    expect(compiled.querySelector('h1')?.textContent).toContain('Backend Engineer');
  });

  it('should render every section', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const titles = Array.from(compiled.querySelectorAll('[ocv-section-title]')).map((el) => {
      const icon = el.querySelector('mat-icon')?.textContent?.trim() ?? '';
      return {
        icon,
        label: (el.textContent ?? '').trim().slice(icon.length).trim(),
      };
    });

    expect(titles).toEqual([
      { icon: 'work', label: 'Professional Experience' },
      { icon: 'school', label: 'Education' },
      { icon: 'interests', label: 'Hobbies' },
      { icon: 'psychology', label: 'Technical Skills' },
      { icon: 'public', label: 'Languages' },
    ]);
  });

  it('should mark English as four dots out of five', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll('[ocv-language]');
    const english = rows[rows.length - 1];
    expect(english.textContent).toContain('English');
    expect(english.querySelectorAll('.dot').length).toBe(5);
    expect(english.querySelectorAll('.dot--off').length).toBe(1);
  });

  it('should open the print dialog from the print button', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const print = vi.spyOn(window, 'print').mockImplementation(() => {});
    const compiled = fixture.nativeElement as HTMLElement;
    buttonLabelled(compiled, 'Print / PDF').click();
    expect(print).toHaveBeenCalledOnce();
    print.mockRestore();
  });

  it('should toggle dark mode and remember the choice', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(document.documentElement.dataset['theme']).toBe('light');

    buttonLabelled(compiled, 'Dark').click();
    await fixture.whenStable();

    expect(document.documentElement.dataset['theme']).toBe('dark');
    expect(localStorage.getItem('ocv-theme')).toBe('dark');

    buttonLabelled(compiled, 'Light').click();
    await fixture.whenStable();

    expect(document.documentElement.dataset['theme']).toBe('light');
    expect(localStorage.getItem('ocv-theme')).toBe('light');
  });
});
