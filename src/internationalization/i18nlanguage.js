import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en:
        {
            translations: {
                'home':"Home",
                'id': 'ID',
                'category_name': 'Category Name',
                'date': 'Date',
                'update': 'Update',
                'delete': 'Delete',
                'cleaner': 'Cleaner',
                'view': 'View',
                'create': 'Create',
                'category_list':"Category List",
                'category_create':"Category Create",
                'category_update':"Category Update",
                'category_delete':"Category Delete",
                "updatedUser":"updated User",
                'category':"Category",
            }
        },
        tr:
        {
            translations: {
                'home':"Anasayfa",
                'id': 'ID',
                'category_name': 'Kategori Adı',
                'date': 'Tarih',
                'update': 'Güncelle',
                'delete': 'Sil',
                'cleaner': 'Temizle',
                'view': 'Göster',
                'create': 'Ekle',
                'category_list':"Kategori List",
                'category_create':"Kategori Ekle",
                'category_update':"Kategori Güncelle",
                'category_delete':"Kategori Sil",
                "updatedUser":"Kim Güncelledi",
                'category':"Kategori",
            }
        }
    },
    fallbackLng: 'tr',    //fallbackLng: 'en', fall back function    
    ns: ['translations'], //kelimeleri nerede alsın
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: { escapeValue: false, formatSeparator: ',' },
    react: {
        wait: true
    }
});
export default i18n;