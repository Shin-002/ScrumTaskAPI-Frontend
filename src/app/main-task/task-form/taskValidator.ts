import { FormControl } from '@angular/forms'
import { from } from 'rxjs';
import { not } from '@angular/compiler/src/output/output_ast';

export class LengthValidator {
    static longEnough(formControl: FormControl){
        return { longEnough: formControl.value.length < 7};
    }
}

export class IntValidator {
    static integer(formControl: FormControl){
        let notInteger = false
        const value = String(formControl.value)

        if (value !== null && value !== ''){
            notInteger = !/^([1-9]\d*|0)$/.test(value)
        }
        return { integer: notInteger}
    }
}
