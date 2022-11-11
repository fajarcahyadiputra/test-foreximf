-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versi server:                 5.7.33 - MySQL Community Server (GPL)
-- OS Server:                    Win64
-- HeidiSQL Versi:               11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Membuang struktur basisdata untuk test_foreximf
CREATE DATABASE IF NOT EXISTS `test_foreximf` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `test_foreximf`;

-- membuang struktur untuk table test_foreximf.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `parent_id` int(11) DEFAULT '0',
  `bonus` float DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

-- Membuang data untuk tabel test_foreximf.users: ~3 rows (lebih kurang)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name`, `parent_id`, `bonus`, `level`, `createdAt`, `updatedAt`) VALUES
	(2, 'asep', 0, 1.5, 1, '2022-11-11 03:23:32', '2022-11-11 06:35:18'),
	(3, 'fajar', 0, 1.5, 1, '2022-11-11 03:23:41', '2022-11-11 06:37:05'),
	(8, 'ujang', 2, 3, 2, '2022-11-11 03:49:15', '2022-11-11 06:35:18'),
	(13, 'didi', 8, 0, 3, '2022-11-11 03:57:09', '2022-11-11 03:57:09'),
	(14, 'kodir', 8, 1, 3, '2022-11-11 03:58:23', '2022-11-11 06:34:42'),
	(15, 'ncep', 2, 0, 2, '2022-11-11 06:34:21', '2022-11-11 06:34:21'),
	(16, 'imas', 14, 0, 4, '2022-11-11 06:34:42', '2022-11-11 06:34:42'),
	(17, 'iman', 8, 0, 3, '2022-11-11 06:35:18', '2022-11-11 06:35:18'),
	(18, 'angel', 3, 1, 2, '2022-11-11 06:36:40', '2022-11-11 06:37:05'),
	(19, 'iyem', 18, 0, 3, '2022-11-11 06:37:05', '2022-11-11 06:37:05');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
