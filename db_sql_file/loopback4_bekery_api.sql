-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 16, 2022 at 03:52 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `loopback4_bekery_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `categoryName` varchar(512) NOT NULL,
  `image` varchar(512) NOT NULL,
  `description` varchar(512) DEFAULT NULL,
  `is_active` int(20) DEFAULT 1,
  `created` datetime DEFAULT NULL,
  `updated` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `categoryName`, `image`, `description`, `is_active`, `created`, `updated`) VALUES
(1, 'Bread', 'Bread', 'Bread', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `totalPrice` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `address` varchar(512) NOT NULL,
  `pincodeId` int(11) NOT NULL,
  `orderDate` varchar(512) NOT NULL,
  `is_active` int(10) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `updated` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orderproduct`
--

CREATE TABLE `orderproduct` (
  `id` int(11) NOT NULL,
  `orderId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `productId` int(11) NOT NULL,
  `totalPrice` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `unitId` int(10) DEFAULT NULL,
  `discount` float(18,2) DEFAULT NULL,
  `is_show` int(10) DEFAULT NULL,
  `is_active` int(10) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `updated` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `pincode`
--

CREATE TABLE `pincode` (
  `id` bigint(10) NOT NULL,
  `pincodeNo` bigint(10) DEFAULT NULL,
  `is_show` int(10) DEFAULT NULL,
  `is_active` int(10) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `updated` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `productName` varchar(512) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `description` varchar(512) DEFAULT NULL,
  `imageone` varchar(512) DEFAULT NULL,
  `imagetwo` varchar(512) DEFAULT NULL,
  `imagethree` varchar(512) DEFAULT NULL,
  `imagefour` varchar(500) DEFAULT NULL,
  `is_active` int(10) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `updated` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `productprice`
--

CREATE TABLE `productprice` (
  `id` bigint(10) NOT NULL,
  `productId` bigint(10) DEFAULT NULL,
  `unitId` bigint(10) DEFAULT NULL,
  `qty` int(10) DEFAULT NULL,
  `price` float(18,2) DEFAULT NULL,
  `discount` float(18,2) DEFAULT NULL,
  `totalPrice` float(18,2) DEFAULT NULL,
  `is_active` int(10) DEFAULT 1,
  `created` datetime DEFAULT NULL,
  `updated` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `unitmaster`
--

CREATE TABLE `unitmaster` (
  `id` bigint(10) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `parentId` bigint(10) DEFAULT NULL,
  `conversion_value` float(18,2) DEFAULT NULL,
  `is_active` int(10) DEFAULT 1,
  `created` datetime DEFAULT NULL,
  `updated` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `unitmaster`
--

INSERT INTO `unitmaster` (`id`, `name`, `parentId`, `conversion_value`, `is_active`, `created`, `updated`) VALUES
(1, 'km', NULL, NULL, 1, NULL, NULL),
(2, 'gm', 1, 1000.00, 1, NULL, NULL),
(3, 'No', NULL, NULL, 1, '2022-05-13 04:30:18', '2022-05-13 04:30:18'),
(4, 'L', NULL, NULL, 1, '2022-05-13 04:42:38', '2022-05-13 04:42:38'),
(5, 'ML', 4, 1000.00, 1, '2022-05-13 04:42:52', '2022-05-13 04:42:52'),
(6, 'Pack', NULL, NULL, 1, '2022-05-13 05:30:08', '2022-05-13 05:30:08');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(512) NOT NULL,
  `mobileNo` varchar(512) DEFAULT NULL,
  `pincodeId` int(10) DEFAULT NULL,
  `address` varchar(512) DEFAULT NULL,
  `password` varchar(512) NOT NULL,
  `is_active` int(10) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `updated` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orderproduct`
--
ALTER TABLE `orderproduct`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pincode`
--
ALTER TABLE `pincode`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productprice`
--
ALTER TABLE `productprice`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `unitmaster`
--
ALTER TABLE `unitmaster`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orderproduct`
--
ALTER TABLE `orderproduct`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pincode`
--
ALTER TABLE `pincode`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `productprice`
--
ALTER TABLE `productprice`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `unitmaster`
--
ALTER TABLE `unitmaster`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
