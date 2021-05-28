import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'detalhes-produto',
    loadChildren: () => import('./detalhes-produto/detalhes-produto.module').then( m => m.DetalhesProdutoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
  {
    path: 'selecionar-mesa',
    loadChildren: () => import('./selecionar-mesa/selecionar-mesa.module').then( m => m.SelecionarMesaPageModule)
  },
  {
    path: 'confirmar',
    loadChildren: () => import('./confirmar/confirmar.module').then( m => m.ConfirmarPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pedidos/pedidos.module').then( m => m.PedidosPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
