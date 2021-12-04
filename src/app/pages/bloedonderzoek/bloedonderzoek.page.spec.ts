import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BloedonderzoekPage } from './bloedonderzoek.page';

describe('BloedonderzoekPage', () => {
  let component: BloedonderzoekPage;
  let fixture: ComponentFixture<BloedonderzoekPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BloedonderzoekPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BloedonderzoekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
