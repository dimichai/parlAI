import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPeersComponent } from './contact-peers.component';

describe('ContactPeersComponent', () => {
  let component: ContactPeersComponent;
  let fixture: ComponentFixture<ContactPeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPeersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
