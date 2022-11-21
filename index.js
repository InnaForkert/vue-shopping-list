const shoppingList = Vue.createApp({
  data() {
    return {
      header: "Shopping List",
      newItem: "",
      newItemHighPriority: false,
      items: [],
      editing: false,
    };
  },
  computed: {
    reversedItems() {
      if (localStorage.getItem("list")) {
        this.items = [...JSON.parse(localStorage.getItem("list"))];
      }
      return [...this.items].reverse();
    },
  },
  methods: {
    saveItem() {
      this.items.push({
        id: this.items.length + 1,
        label: this.newItem,
        highPriority: this.newItemHighPriority,
        purchased: false,
      });
      localStorage.setItem("list", JSON.stringify(this.items));
      this.newItem = "";
    },
    doEdit(editing) {
      this.editing = editing;
      this.newItem = "";
      this.newItemHighPriority = "";
    },
    togglePurchased(item) {
      item.purchased = !item.purchased;
    },
    deleteItem(index) {
      this.items.splice(index, 1);
      localStorage.setItem("list", JSON.stringify(this.items));
    },
  },
}).mount("#shopping-list");
