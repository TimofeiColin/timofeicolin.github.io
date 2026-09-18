import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
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
});
