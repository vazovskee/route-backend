import { ModuleContract } from '../contract/module.contract';
import { Type } from '../contract/type.contract';
import { UsersModule } from "../module/users/users.module";

// import { ProductModule } from '../module/product/product.module';
// import { ProductsModule } from '../module/products/products.module';
// import { AuthModule } from '../module/auth/auth.module';
// import { AuthorModule } from '../module/author/author.module';
// import { NftModule } from '../module/nft/nft.module';
// import { GalleryModule } from '../module/gallery/gallery.module';
// import { DbModule } from '../module/db/db.module';

const moduleClasses: Array<Type<ModuleContract>> = [
    UsersModule,
    // ProductModule,
    // ProductsModule,
    // AuthModule,
    // NftModule,
    // AuthorModule,
    // GalleryModule,
    // DbModule
];

export const modules = moduleClasses.map(moduleClass => new moduleClass());
