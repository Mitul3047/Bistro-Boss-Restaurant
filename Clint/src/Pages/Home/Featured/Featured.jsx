import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="check it out" heading="Featured Item"></SectionTitle>
            <div className="md:flex justify-center bg-slate-400 bg-opacity-60 items-center pb-20 pt-12 px-36">
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className="ml-10">
                <p>Nov 11, 2023</p>
                <p className="uppercase text-white">Where can i get some</p>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusantium est voluptatum, laborum ex labore exercitationem quod, error commodi doloribus voluptates modi quam. Dicta laudantium quisquam tempora quidem saepe suscipit?</p>
                <button className="btn  btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;