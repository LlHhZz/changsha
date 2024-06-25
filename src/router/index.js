import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import InformationDeclarationView from '../views/InformationDeclarationView.vue'
import DeclarationResultsView from '../views/DeclarationResultsView.vue'
import DeclarationAnalyseView from '../views/DeclarationAnalyseView.vue'
import InformationManagementView from '../views/InformationManagementView.vue'
import UserAuthManagementView from '../views/UserAuthManagementView.vue'
import SettingsView from '../views/SettingsView.vue'

import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/informationDeclaration/:areaName/:areaValue',
    name: 'informationDeclaration',
    component: InformationDeclarationView
  },
  {
    path: '/informationManagement/:areaName/:areaValue',
    name: 'informationManagement',
    component: InformationManagementView
  },
  {
    path: '/declarationResults',
    name: 'declarationResults',
    component: DeclarationResultsView
  },
  {
    path: '/userAuthManagement',
    name: 'userAuthManagement',
    component: UserAuthManagementView
  },
  {
    path: '/declarationAnalyse',
    name: 'declarationAnalyse',
    component: DeclarationAnalyseView
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView
  },
  {
    path: '/404',
    name: '404',
    component: NotFoundView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
