import React, { useEffect } from 'react';
import { Breadcrumb_pages, useFetchData } from '../src/comman';
import ThemeChanger from '../src/component/ThemeChanger';
import Header_h1 from 'src/component/Header_h1'
import Footer_h3 from '../src/component/Footer_h3';

export default function Single_shop() {

  /*  ============= Skeletone_loader ============   */

  const [isLoading, setIsLoading] = React.useState(true);

  const breadcrumbItems = [
    { title: 'terms & conditions', url: ``, type: false },
  ];

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);


  return (
    <>
      <ThemeChanger />
      <Header_h1 />
      <Breadcrumb_pages breadcrumbItems={breadcrumbItems} />

      <div className='2xl:py-24 lg:py-16 py-12 '>
        <div className='container'>
          <h1 className='text-gray-800 md:mb-8 mb-4 2xl:text-3xl lg:text-2xl sm:text-1xl text-xl leading-tight'>Terms & Conditions</h1>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.</p>
          <h2 className='text-gray-800 md:my-8 my-4 2xl:text-xl lg:text-[26px] sm:text-[22px] text-[20px] leading-tight'>Arbitration</h2>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>&ldquo;But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? </p>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod. </p>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
          <h2 className='text-gray-800 md:my-8 my-4 2xl:text-xl lg:text-[26px] sm:text-[22px] text-[20px] leading-tight'>Change of Terms</h2>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. </p>
          <h2 className='text-gray-800 md:my-8 my-4 2xl:text-xl lg:text-[26px] sm:text-[22px] text-[20px] leading-tight'>Site Content</h2>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>

          <h2 className='text-gray-800 md:my-8 my-4 2xl:text-xl lg:text-[26px] sm:text-[22px] text-[20px] leading-tight'>Trademarks</h2>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &ldquo;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&rdquo;, comes from a line in section 1.10.32 </p>
          <h2 className='text-gray-800 md:my-8 my-4 2xl:text-xl lg:text-[26px] sm:text-[22px] text-[20px] leading-tight'>Payment Information</h2>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?&quot;error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
          <h2 className='text-gray-800 md:my-8 my-4 2xl:text-xl lg:text-[26px] sm:text-[22px] text-[20px] leading-tight'>Your Account and Order</h2>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances.</p>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>Undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
          <h2 className='text-gray-800 md:my-8 my-4 2xl:text-xl lg:text-[26px] sm:text-[22px] text-[20px] leading-tight'>Shipping</h2>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>Please review our shipping policy here. </p>
          <h2 className='text-gray-800 md:my-8 my-4 2xl:text-xl lg:text-[26px] sm:text-[22px] text-[20px] leading-tight'>Passage of Title</h2>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.</p>
          <h2 className='text-gray-800 md:my-8 my-4 2xl:text-xl lg:text-[26px] sm:text-[22px] text-[20px] leading-tight'>Returns</h2>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
          <h2 className='text-gray-800 md:my-8 my-4 2xl:text-xl lg:text-[26px] sm:text-[22px] text-[20px] leading-tight'>Cancellation of Products</h2>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty.</p>
          <h2 className='text-gray-800 md:my-8 my-4 2xl:text-xl lg:text-[26px] sm:text-[22px] text-[20px] leading-tight'>Third Party Content</h2>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>Which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.&quot;</p>

        </div>
      </div>

      <Footer_h3 />
    </>
  )
}



