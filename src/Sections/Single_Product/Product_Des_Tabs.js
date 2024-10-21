import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import Customer_Review from './customer-review-list';
import { useFetchData } from '../../comman';



const Product_Des_Tabs = ({ initialValues }) => {
    const [selected, setSelected] = React.useState("description");
    const { data: review_data } = useFetchData("json/data/Customer_Review.json");


    return (
        <div className='container'>
        <div className="flex w-full flex-col">
        <Tabs 
          aria-label="Options"    radius='none'     
          selectedKey={selected}
          onSelectionChange={setSelected}
          classNames={{
            tabList: "lg:gap-4 gap-2 w-full relative rounded-none p-0 bg-transparent md:flex-row flex-col",
            cursor: "w-full bg-violet-900 !rounded-none",
            tab: "md:max-w-fit lg:px-10 px-5 !rounded-none 2xl:text-[20px] lg:text-lg text-md lg:py-7 py-6 bg-violet-400 text-gray-900",
            tabContent: "group-data-[selected=true]:text-white text-gray-900 font-[400]",
            panel:"p-0 shadow-none border-none"
          }}
        >
          <Tab key="description" title="Description" className=''>
              <h3 className='lg:text-3xl sm:text-1xl text-xl lg:mb-4 mb-2 text-gray-800 mt-4'>Discription</h3>
              <p className='lg:mb-4 mb-2 2xl:text-lg lg:text-[17px] text-md text-gray-800 leading-7'>&quot;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.&quot;</p>
              <p  className='lg:mb-4 mb-2 2xl:text-lg lg:text-[17px] text-md text-gray-800 leading-7'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
              <p  className='2xl:text-lg lg:text-[17px] text-md text-gray-800 leading-7'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.</p>

          </Tab>
          <Tab key="Additional information" title="Additional information">
              <h3 className='lg:text-3xl sm:text-1xl text-xl lg:mb-4 mb-2 text-gray-800 mt-4'>Additional information</h3>
              <p className='lg:mb-4 mb-2 2xl:text-lg lg:text-[17px] text-md text-gray-800 leading-7'>&quot;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.&quot;</p>
              <p  className=' 2xl:text-lg lg:text-[17px] text-md text-gray-800 leading-7'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p> 
            
          </Tab>
          <Tab key="Reviews" title="Reviews">
            <div className='my-8 pt-4 border-t border-gray-100/10'>
              <Customer_Review initialValues={review_data}/>
              </div>
          </Tab>
        </Tabs>
      </div>  
      </div>
    )
}

export default Product_Des_Tabs;