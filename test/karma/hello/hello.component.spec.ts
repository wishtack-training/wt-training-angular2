/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

import { TestBed } from '@angular/core/testing';
import { HelloModule } from '../../../src/app/hello/hello.module';
import { HelloComponent } from '../../../src/app/hello/hello.component';

describe('HelloComponent', () => {

    beforeEach((done) => {

        TestBed.configureTestingModule({
            imports: [
                HelloModule
            ]
        })
            .compileComponents()
            .then(done);

    });

    it('should say hello', () => {

        let fixture = TestBed.createComponent(HelloComponent);

        expect(fixture.nativeElement.innerText).toEqual('Hello!');

    });

});
