function data(dataName) {
  switch (dataName) {
    case "products":
      const products = [
        {
          id: "1",
          name: "Awesome Soft Hat",
          name_category: "Thời trang nam",
          code: "19381-4141",
          image: "https://bizweb.dktcdn.net/100/396/594/files/xu-huong-thoi-trang-nam-2021-3.jpg?v=1623825482980",
          price: "788.00",
          old_price: "529.00",
        },
        {
          id: "2",
          name: "Ergonomic Concrete Computer",
          name_category: "Thời trang nam",
          code: "52634-1797",
          image: "http://way.com.vn/vnt_upload/File/Image/500.jpg",
          price: "698.00",
          old_price: "0",
        },
        {
          id: "3",
          name: "Ergonomic Fresh Salad",
          name_category: "Thời trang nam",
          code: "39873-7574",
          image: "https://fashionminhthu.com.vn/wp-content/uploads/2021/01/Mau-ao-khoac-nam-2021-1-480x340.jpg",
          price: "685.00",
          old_price: "740.00",
        },
        {
          id: "4",
          name: "Generic Metal Salad",
          name_category: "Thời trang nữ",
          code: "23481",
          image: "https://toplist.vn/images/800px/ben-amp-tod-321587.jpg",
          price: "322.00",
          old_price: "175.00",
        },
        {
          id: "5",
          name: "Sleek Concrete Car",
          name_category: "Thời trang nữ",
          code: "86114-2477",
          image: "https://aokhoacdep.vn/wp-content/uploads/2019/11/14-3-510x680.jpg",
          price: "891.00",
          old_price: "0",
        },
        {
          id: "6",
          name: "Unbranded Rubber Tuna",
          name_category: "Thời trang nam 6",
          code: "33468",
          image: "http://lorempixel.com/640/480/transport",
          price: "856.00",
          old_price: "220.00",
        },
        {
          id: "7",
          name: "Handmade Metal Towels",
          name_category: "Thời trang nữ",
          code: "49368",
          image: "http://lorempixel.com/640/480/transport",
          price: "90.00",
          old_price: "0",
        },
        {
          id: "8",
          name: "Unbranded Fresh Chicken",
          name_category: "Thời trang nữ",
          code: "56232-8101",
          image: "http://lorempixel.com/640/480/city",
          price: "760.00",
          old_price: "698.00",
        },
        {
          id: "9",
          name: "Generic Wooden Cheese",
          name_category: "Thời trang nữ",
          code: "69081-5706",
          image: "http://lorempixel.com/640/480/fashion",
          price: "619.00",
          old_price: "160.00",
        },
        {
          id: "10",
          name: "Intelligent Granite Pants",
          name_category: "Thời trang nam",
          code: "81541",
          image: "http://lorempixel.com/640/480/abstract",
          price: "13.00",
          old_price: "729.00",
        },
      ];
      return products;
    default:
      return [];
  }
}
export default data;
