import { CommonModule } from "@angular/common";
import { Component, forwardRef, OnInit } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: "app-phone-number",
    templateUrl: "./phone-number.component.html",
    styleUrls: ["./phone-number.component.scss"],
    providers: [
        {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => PhoneNumberComponent),
        multi: true,
        },
    ],
    imports: [CommonModule, ],
    })
export class PhoneNumberComponent implements ControlValueAccessor, OnInit {
    countries = [
        { code: "+212", name: "Morocco" },
        { code: "+1", name: "United States" },
        { code: "+91", name: "India" },
        { code: "+44", name: "United Kingdom" },
        { code: "+61", name: "Australia" },
    ];

    selectedCountry = this.countries[0];
    phoneNumber = "";

    private onChange: (value: string) => void = () => {};
    private onTouched: () => void = () => {};

    ngOnInit() {}

    writeValue(value: string): void {
        if (value) {
            const [dialCode, number] = value.split(" ");
            this.selectedCountry = this.countries.find(
                (country) => country.code === dialCode ) || this.countries[0];
            this.phoneNumber = number;
        }
        }
    
        registerOnChange(fn: (value: string) => void): void {
            this.onChange = fn;
        }
    
        registerOnTouched(fn: () => void): void {
            this.onTouched = fn;
        }
    
        setDisabledState?(isDisabled: boolean): void {
            throw new Error("Method not implemented.");
        }
    
        onCountryChange(event: Event) {
            const selectElement = event.target as HTMLSelectElement;
            this.selectedCountry = this.countries.find(
                (country) => country.name === selectElement.value) || this.countries[0];
            this.onTouched();
        }
    
        onPhoneNumberChange(event: Event) {
            const inputElement = event.target as HTMLInputElement;
            this.phoneNumber = inputElement.value;
            this.updateValue();
        }
    
        updateValue() {
            const value = `${this.selectedCountry.code} ${this.phoneNumber}`;
            this.onChange(value);
            this.onTouched();
        }
    }