<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <!-- titli te nav bar anash -->
            Naruto
          </v-list-item-title>
          <v-list-item-subtitle>
            <!--  nen title te navbarit anash-->
            Shipuden editon
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <!-- new vuetify list -->
      <v-list dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to ="item.link" link>
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view>

      </router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Home", icon: "mdi-home", link: "/" },
      { title: "Add Post", icon: "mdi-note-plus", link: "/add-post" },
      { title: "About", icon: "mdi-help-box", link: "/about" },
      { title: "Watch", icon: "mdi-television", link: "/watch" },
      { title: "Contact", icon: "mdi-card-account-mail-outline", link: "/contact" },
      { title: "Login", icon: "mdi-account", link: "/Login" },
    ],
  }),
}
</script>