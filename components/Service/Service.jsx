import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Service.module.css";
import images from "../../img";
const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <Image
            src={images.service1}
            alt="Filter & Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 1</span>
          </p>
          <h3>Connect</h3>
          <p>
            Connect with wallet and make a unique profile.
        
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service2}
            alt="Filter & Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 2</span>
          </p>
          <h3>Discover</h3>
          <p>
            Find your favorite NFT Collections,Follow Artists or Buy/Sell NFTs
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service3}
            alt="Connect Wallet"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 3</span>
          </p>
          <h3>Stake</h3>
          <p>
            Our unique Contracts make eaiser to stake any nfts.
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service1}
            alt="Filter & Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 4</span>
          </p>
          <h3>Start Earning</h3>
          <p>
            Earn Most hot Tokens,NFTs,Pre mints, Air Drops,Drop sales and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
