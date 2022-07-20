const app = Vue.createApp({
    el: "#demo",
    data() {
      return {
        Account: false,
        Operation: false,
        Item: false,
        accountValue: "",
        operationValue: "",
        accounts: ["Банк", "Наличные"],
        operations: [
          {
            Account: "Банк",
            Item: "Зарплата",
            operationValue: "20000",
            dateValue: "2022-07-15"
          },
          {
            Account: "Наличные",
            Item: "КУ",
            operationValue: "-5000",
            dateValue: "2022-07-15"
          },
          {
            Account: "Наличные",
            Item: "Аренда",
            operationValue: "-10000",
            dateValue: "2022-07-18"
          }
        ],
        items: ["Зарплата", "Продукты", "КУ", "Связь", "Машина"],
        valueDate: ""
      };
    },
    methods: {
      addAccount() {
        if (this.accountValue !== "") {
          this.accounts.push(this.accountValue);
          this.accountValue = "";
          this.Account = false;
        }
      },
      deleteAccount(idx) {
        this.accounts.splice(idx, 1);
      },
      addOperation() {
        if (this.operationValue !== "") {
          this.operations.Account = this.selectedAccount;
          this.operations.Item = this.selectedItem;
          this.operations.operationValue = this.operationValue;
          this.operations.dateValue = this.dateValue;
          this.operations.push([
            this.selectedAccount,
            this.selectedItem,
            this.operationValue,
            this.valueDate
          ]);
          this.operationValue = "";
          this.Operation = false;
        }
      },
      deleteOperation(idx) {
        this.operations.splice(idx, 1);
      },
      addItem() {
        if (this.itemValue !== "") {
          this.items.push(this.itemValue);
          this.itemValue = "";
          this.Item = false;
        }
      },
      filtred(){ 
          const chooseFilterValue = this.filtrededAccount;
          const tableBody = document.querySelector(".target");
           for (let i = 1; i < tableBody.rows.length; i++) {
              for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
                  if(chooseFilterValue === tableBody.rows[i].cells[j].innerHTML){
                      tableBody.rows[i].style.display = "";
                  } else {
                      tableBody.rows[i].style.display = "none";
                  }
              }
           }
           
          }
    },
    computed: {
      transactionAmount() {return this.operations.reduce((prev, curr) => prev += Number(curr.operationValue), 0);
  }
  }
  });
  
  app.mount("#app");
  
 