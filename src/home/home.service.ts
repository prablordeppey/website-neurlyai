import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  itemsData!: ItemModel[];
  carouselData!: CarouselModel[]

  constructor() { }

  get getItemsData(){
    return this.itemsData
  }

  get getCarouselData(){
    return this.carouselData
  }

  fetchItemsData(){
    this.itemsData = [
      {
        img_url: 'https://bltimages-cdn1.global.ssl.fastly.net/uploads/event/banner/191997/bigdata.png',
        title: 'What is BigData?',
        description: 'Understanding BigData is a crucial aspect of appreciating the usefulness of Neural Nets and Deep Learning.' +
          'This module gives you all you need to know about BigData',
        resource_link: 'bigdata'
      },
      {
        img_url: 'https://solvimm.com/wp-content/uploads/2018/09/o-que-e-machine-learning-capa.png',
        title: 'What is machine learning?',
        description: 'An overview of Machine Learning and problems it seek to solve are also detailed.',
        resource_link: 'machine_learning'
      },
      {
        img_url: 'https://livecodestream.dev/post/top-ml-algorithms-for-classification/featured_hu4319d5ff4a4e9c05cba253c9f6e69f4d_112537_680x0_resize_q90_h2_lanczos.webp',
        title: 'traditional classifiers',
        description: 'A classifier is a mathematical machine-learning model trained to predict labels or classes of input data. ' +
          'Here, we present the most used classifiers, their implementaion and associated algorithms.',
        resource_link: 'traditional_classifiers'
      },
      {
        img_url: 'https://static.javatpoint.com/tutorial/machine-learning/images/types-of-regression.png',
        title: 'traditional regressors',
        description: 'A regressor is a mathematical machine-learning model trained to predict real valued outputs.',
        resource_link: 'traditional_regressors'
      },
      {
        img_url: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/75/11453069b511e3bca95d57a55dab34/RegressionModels.jpg?auto=format%2Ccompress&dpr=1',
        title: 'Regression vs Classification',
        description: 'When to use classification and when not is key in the life of a Data Scientist. High level comparison is presented.',
        resource_link: 'regression_vs_classification'
      },
      {
        img_url: 'data:image/png;base64,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',
        title: 'traditional clustering algorithms',
        description: 'Clustering involves identifying patterns in unlabelled datasets and grouping similar items together.',
        resource_link: 'traditional_clusterers'
      },
    ]
  }

  fetchCarouselData(){
    this.carouselData = [
      {
        title: 'Our Github Repository',
        img_url: 'https://desk.zoho.com/DocsDisplay?zgId=675659995&mode=inline&blockId=4f8642de267cbc29548e48bade204834f7f32',
        alt: 'github repository',
        description: '',
        resource_link: 'https://github.com/prablordeppey',
      },
      {
        title: 'Our Youtube Channel',
        img_url: 'https://logosmarcas.net/wp-content/uploads/2020/04/YouTube-Logo.png',
        alt: 'youtube channel',
        description: 'Lectures on topics and concepts',
        resource_link: 'https://www.youtube.com/channel/UCFlgJ0SvO5ZWWMJB657_Qdw'
      },
      {
        title: 'Tensors',
        img_url: 'https://i.ytimg.com/vi/VS7b3CIk1DM/sddefault.jpg',
        alt: 'tensor',
        description: 'Simultaneous Tensor Dimensionality Reduction and Clustering Techniques',
        resource_link: 'https://github.com/tensors',
      },
    ]
  }
}
