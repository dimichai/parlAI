CREATE TABLE `parlai`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `real_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `spec_keywords` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
