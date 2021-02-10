import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedLibService {

  constructor() { }
  services :any[] = [
    {
        id: '5eebb22d4cd63c022454c29e',
        nameEn: 'reprehenderit deserunt tempor cillum consectetur magna',
        nameAr: 'استرجاع حجز اضطرارية سفينة',
        descriptionEn: 'velit magna culpa voluptate ullamco exercitation quis dolore deserunt culpa laborum tempor',
        descriptionAr: 'استرجاع مراجعة سيارة رؤية حذف إجازة تذاكر محاولة إلغاء حجز سنوية بدون',
        status: 'Activated',
        type: 'Public',
        audience: {
            type: 'Anyone'
        },
        category: 'HR'
      },
      {
        id: '5eebb22dff3edadd63939015',
        nameEn: 'pariatur laboris exercitation duis incididunt adipisicing',
        nameAr: 'طلب دفع اضطرارية قبطان',
        descriptionEn: 'aliquip commodo ex commodo qui minim est esse nulla elit voluptate culpa',
        descriptionAr: 'حذف سيران اضطرارية قرصان حذف دفع تذاكر فلافل استرجاع دفع اضطرارية فورية',
        status: 'Deactivated',
        type: 'Public',
        audience: {
            type: 'Anyone'
        },
        category: 'finance'
      },
      {
        id: '5eebb22d987166b71cb96db4',
        nameEn: 'magna non anim laboris amet commodo',
        nameAr: 'طلب حجز تذاكر لعب',
        descriptionEn: 'velit ut consequat exercitation cupidatat sunt sunt quis culpa nisi nisi veniam',
        descriptionAr: 'استرجاع سيران تذاكر خاطفة حذف إجازة تذاكر انتباه إلغاء إجازة فندق فورية',
        status: 'Deactivated',
        type: 'Public',
        audience: {
            type: 'Anyone'
        },
        category:'finance'
      },
      {
        id: '5eebb22deffaceae3743fb37',
        nameEn: 'esse velit voluptate qui fugiat mollit',
        nameAr: 'حذف حجز فندق قبطان',
        descriptionEn: 'dolor est eiusmod elit fugiat aute aute adipisicing quis ipsum nisi magna',
        descriptionAr: 'استرجاع سيران اضطرارية قرصان طلب حجز سيارة بدون استرجاع حجز اضطرارية فورية',
        status: 'Draft',
        type: 'Public',
        audience: {
            type: 'Anyone'
        },
        category: 'HR'}
        ,
        {
          id: '5eebb22deca3f3408aed8eb5',
          nameEn: 'quis eiusmod laboris sit fugiat elit',
          nameAr: 'طلب دفع سيارة فورية',
          descriptionEn: 'sint est voluptate sit Lorem labore dolore sit exercitation amet ut velit',
          descriptionAr: 'حذف مراجعة سنوية بدون حذف دفع اضطرارية قبطان استرجاع دفع سنوية كتاب',
          status: 'Draft',
          type: 'Public',
          audience: {
              type: 'Anyone'
          },
          category: 'HR'
        },
        {
          id: '5eebb22d5e44a5efdea3689b',
          nameEn: 'ea aute ullamco sit ex veniam',
          nameAr: 'طلب دفع فندق سفينة',
          descriptionEn: 'sint qui cupidatat ex culpa officia ipsum sunt aute excepteur ad velit',
          descriptionAr: 'استرجاع دفع اضطرارية رؤية استرجاع حجز سنوية لعب استرجاع دفع اضطرارية جمال',
          status: 'Draft',
          type: 'Public',
          audience: {
              type: 'Anyone'
          },
          category: 'HR'},
          {
            id: '5eebb22decb0804447ae4c3c',
            nameEn: 'occaecat et quis anim reprehenderit quis',
            nameAr: 'حذف دفع سنوية قرصان',
            descriptionEn: 'deserunt voluptate esse proident aute consequat minim proident mollit amet nulla voluptate',
            descriptionAr: 'حذف دفع فندق رؤية حذف إجازة سيارة فورية حذف إجازة فندق لعب',
            status: 'Activated',
            type: 'Public',
            audience: {
                type: 'Anyone'
            },
            category: 'HR'},
            {
              id: '5eebb22d427e382960abb9c4',
              nameEn: 'magna deserunt nostrud ad eu excepteur',
              nameAr: 'طلب إجازة فندق جمال',
              descriptionEn: 'officia elit nisi pariatur veniam qui ipsum quis nostrud anim nisi duis',
              descriptionAr: 'حذف سيران اضطرارية رؤية حذف حجز سنوية بدون إلغاء دفع فندق كتاب',
              status: 'Draft',
              type: 'Public',
              audience: {
                  type: 'Anyone'
              },
              category: 'HR'},
              {
                id: '5eebb22dc0e1373fd7a8d604',
                nameEn: 'cillum irure ex voluptate laborum veniam',
                nameAr: 'طلب إجازة تذاكر جمال',
                descriptionEn: 'tempor exercitation exercitation anim elit tempor quis fugiat pariatur voluptate nulla exercitation',
                descriptionAr: 'حذف سيران فندق لعب طلب حجز سنوية بدون إلغاء إجازة تذاكر كتاب',
                status: 'Activated',
                type: 'Private',
                audience: {
                    type: 'Group',
                    value: {
                        id: 'grp1',
                        nameEn: 'Top Level Management',
                        nameAr: 'المدراء العامون',
                        type: 'Access',
                        organizationId: 'org123',
                    },
                },
                category: 'HR'
              },
              {
                id: '5eebb22ddb50d972ba8f75df',
                nameEn: 'officia dolor quis pariatur id cupidatat',
                nameAr: 'استرجاع دفع سيارة جمال',
                descriptionEn: 'incididunt Lorem cupidatat reprehenderit aliqua sint adipisicing culpa excepteur aute quis veniam',
                descriptionAr: 'طلب مراجعة سيارة خاطفة استرجاع دفع سنوية انتباه حذف حجز اضطرارية قرصان',
                status: 'Draft',
                type: 'Private',
                audience: {
                    type: 'Group',
                    value: {
                        id: 'grp1',
                        nameEn: 'Top Level Management',
                        nameAr: 'المدراء العامون',
                        type: 'Access',
                        organizationId: 'org123',
                    },
                },
                category:'HR'},
                {
                  id: '5eebb22dca51f8fa0a464363',
                  nameEn: 'Lorem eiusmod fugiat aliquip velit dolor',
                  nameAr: 'استرجاع إجازة سيارة جمال',
                  descriptionEn: 'non reprehenderit aute sit tempor do nulla veniam voluptate ea tempor consectetur',
                  descriptionAr: 'استرجاع دفع تذاكر رؤية حذف حجز تذاكر بدون حذف دفع اضطرارية قبطان',
                  status: 'Deactivated',
                  type: 'Public',
                  audience: {
                      type: 'Anyone'
                  },
                  category: 'HR'},
                  {
                    id: '5eebb22def2979266028653d',
                    nameEn: 'sit ipsum labore consequat est amet',
                    nameAr: 'حذف حجز اضطرارية بدون',
                    descriptionEn: 'dolor tempor duis ad eiusmod officia ut non culpa incididunt enim laborum',
                    descriptionAr: 'حذف سيران سنوية لعب استرجاع إجازة فندق انتباه استرجاع إجازة اضطرارية كتاب',
                    status: 'Draft',
                    type: 'Public',
                    audience: {
                        type: 'Anyone'
                    },
                    category: 'HR'}
                  ]

     requests :any[] = [
       {
             id: '6eebb22def2979266028653d',
             serviceName: 'استرجاع حجز اضطرارية سفينة',
             userName:'أحمد الأحمد',
             status:'Done'
         },
         {
             id:'7eebb22def2979266028653d',
             serviceName:'حذف دفع سنوية قرصان',
             userName:'محمد المحمد',
             status:'Pending'

         },
         {
           id:'8eebb22def2979266028653d',
           serviceName:'طلب إجازة تذاكر جمال',
           userName:'أيمن المحمد',
           status:'Open'

       },
       {
        id:'9eebb22def2979266028653d',
        serviceName:'حذف دفع سنوية قرصان',
        userName:'سليم المحمد',
        status:'Done'

    },
    {
        id: '2eebb22def2979266028653d',
        serviceName: 'استرجاع حجز اضطرارية سفينة',
        userName:'رامي السعيد',
        status:'Open'

    },
         ]
     getServices():Observable<any>{
      return of(this.services) ;
     }                
     getRenderServices():Observable<any>{
       const data=this.services.filter(s=>s.status=="Activated")
       return of(data) ;
     }                
     getRenderRequests():Observable<any>{
        return of(this.requests) ;
      }   
                }

