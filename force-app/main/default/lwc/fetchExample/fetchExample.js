import { LightningElement, track } from 'lwc';

export default class FetchExample extends LightningElement {
    @track employees = [];
    @track tempEmp = [];

    flag = true;
    count = 0;
    searchValue = '';

    async fetchData(event) {
        let fetchUrl = "https://employee-directory-services.herokuapp.com/employees";



        try {
            let response = await (await fetch(fetchUrl, { method: "GET" })).json();
            this.employees = response;
            this.tempEmp = this.employees;
            console.log('the emp array value is ' + this.employees);
            console.log('the temp array value is ' + this.tempEmp);
            this.flag = true;
        }
        catch (e) {
            console.log(e);
        }
    }

    handleSearch(event) {
        this.searchValue = (this.template.querySelector(".searchName").value).toString();

        for (let i = 0; i < this.employees.length; i++) {
            if (this.searchValue != '') {
                if ((this.employees[i].firstName).toString() == this.searchValue) {
                    this.employees = this.employees.slice(i, i + 1);
                    console.log(this.employees);
                    console.log(i, i + 1);
                    this.count = i;
                    this.flag = false;

                }
            }
            else if (this.searchValue == '') {
                console.log('the search value is ' + this.searchValue);
                this.employees = this.tempEmp;
                console.log(this.employees);
                this.count = 0;
                this.flag = true;
            }


        }

    }

    handlePrev(event) {
        this.employees = this.tempEmp;
        if (this.count != 0) {
            console.log('count value is ' + this.count);
            this.count--;
            this.employees = this.employees.slice(this.count, this.count + 1);
            console.log(this.count, this.count + 1);
        }
        else if (this.count == 0) {
            console.log('count value is ' + this.count);
            this.employees = this.employees.slice(0, 1);
        }
    }

    handleNext(event) {
        this.employees = this.tempEmp;
        if (this.count != this.employees.length) {

            console.log('employees length value is  ' + this.employees.length);
            this.count++;
            this.employees = this.employees.slice(this.count, this.count + 1);
            console.log(this.count, this.count + 1);
        }
        else if (this.count == this.employees.length) {
            console.log('count value is ' + this.count);
            this.employees = this.employees.slice(this.employees.length - 1, this.employees.length + 1);
            console.log(this.count, this.count + 1);
        }
    }

}