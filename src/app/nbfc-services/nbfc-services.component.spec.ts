import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NbfcServicesComponent } from './nbfc-services.component';

describe('NbfcServicesComponent', () => {
	let component: NbfcServicesComponent;
	let fixture: ComponentFixture<NbfcServicesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NbfcServicesComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(NbfcServicesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});