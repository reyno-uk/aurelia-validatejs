import {autoinject} from 'aurelia-framework';
import {ValidationEngine, required} from 'aurelia-validatejs';

@autoinject
export class App {

    constructor(
    ) {
        this.reporter = ValidationEngine.getValidationReporter(this);
        this.subscriber = this.reporter.subscribe(result => {
            this.renderErrors(result);
        });
    }

    reporter: any;
    subscriber: any;
    errors: any[] = [];

    @required firstName: string = '';
    
    detached() {
        this.subscriber.dispose();
    }

    submit() {
        if (!this.hasErrors()) {
            alert('Submitted successfully');
        } else {
            alert('Form has errors');
        }
    }
    
    hasErrors() {
        return !!this.errors.length;
    }
    
    renderErrors(result) {
        this.errors.splice(0, this.errors.length);
        result.forEach(error => {
            this.errors.push(error)
        });
    }

}
