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
  },
}).mount("#shopping-list");
