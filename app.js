
const app = Vue.createApp({
    el: '#demo',
    data() {
        return {
            Account: false,
            Operation: false,
            accountValue: '',
            operationValue: '',
            accounts: [],
            operations: [],
            items:['Зарплата','Продукты','КУ','Связь','Машина'],
            value: '',
        }
    },
    methods: {  
        addAccount() {
            if (this.accountValue !== '') {
                this.accounts.push(this.accountValue);
                this.accountValue = '';    
                this.Account = false;  
            } 
        },
        deleteAccount(idx) {
            this.accounts.splice(idx, 1);
        },
        addOperation() {
            if (this.operationValue !== '') {
                this.operations.push([this.selectedAccount,this.selectedItem,this.operationValue]);
                this.operationValue = '';    
                this.Operation = false;  
            } 
        },
        deleteOperation(idx) {
            this.operations.splice(idx, 1);
        },

    },
})

app.mount('#app')


  
 