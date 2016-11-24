#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: vid_user
#------------------------------------------------------------

CREATE TABLE vid_user(
        id_user   int (11) Auto_increment  NOT NULL ,
        username  Varchar (20) NOT NULL ,
        password  Varchar (25) NOT NULL ,
        email     Varchar (25) NOT NULL ,
        lastname  Varchar (25) NOT NULL ,
        firstname Varchar (25) NOT NULL ,
        cp        Varchar (25) NOT NULL ,
        address   Varchar (25) NOT NULL ,
        country   Varchar (50) NOT NULL ,
        phone     Varchar (20) NOT NULL ,
        PRIMARY KEY (id_user ) ,
        UNIQUE (username )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: vid_movie
#------------------------------------------------------------

CREATE TABLE vid_movie(
        id_movie     int (11) Auto_increment  NOT NULL ,
        name         Varchar (25) NOT NULL ,
        release_date Date NOT NULL ,
        rate         Int NOT NULL ,
        PRIMARY KEY (id_movie )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: vid_actor
#------------------------------------------------------------

CREATE TABLE vid_actor(
        id_actor int (11) Auto_increment  NOT NULL ,
        name     Varchar (25) NOT NULL ,
        lastname Varchar (25) NOT NULL ,
        dob      Date NOT NULL ,
        PRIMARY KEY (id_actor )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: vid_director
#------------------------------------------------------------

CREATE TABLE vid_director(
        id_director int (11) Auto_increment  NOT NULL ,
        name        Varchar (25) NOT NULL ,
        lastname    Varchar (25) NOT NULL ,
        dob         Date NOT NULL ,
        PRIMARY KEY (id_director )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: vid_episode
#------------------------------------------------------------

CREATE TABLE vid_episode(
        id_episode   int (11) Auto_increment  NOT NULL ,
        name         Varchar (25) NOT NULL ,
        season       Int NOT NULL ,
        release_date Date NOT NULL ,
        id_serie     Int NOT NULL ,
        PRIMARY KEY (id_episode )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: vid_serie
#------------------------------------------------------------

CREATE TABLE vid_serie(
        id_serie int (11) Auto_increment  NOT NULL ,
        name     Varchar (25) NOT NULL ,
        rate     Int NOT NULL ,
        PRIMARY KEY (id_serie )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: vid_movie_director
#------------------------------------------------------------

CREATE TABLE vid_movie_director(
        id_movie    Int NOT NULL ,
        id_director Int NOT NULL ,
        PRIMARY KEY (id_movie ,id_director )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: vid_serie_director
#------------------------------------------------------------

CREATE TABLE vid_serie_director(
        id_director Int NOT NULL ,
        id_serie    Int NOT NULL ,
        PRIMARY KEY (id_director ,id_serie )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: vid_movie_actor
#------------------------------------------------------------

CREATE TABLE vid_movie_actor(
        id_movie Int NOT NULL ,
        id_actor Int NOT NULL ,
        PRIMARY KEY (id_movie ,id_actor )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: vid_serie_actor
#------------------------------------------------------------

CREATE TABLE vid_serie_actor(
        id_serie Int NOT NULL ,
        id_actor Int NOT NULL ,
        PRIMARY KEY (id_serie ,id_actor )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: vid_user_movie
#------------------------------------------------------------

CREATE TABLE vid_user_movie(
        isSeen   Bool NOT NULL ,
        id_movie Int NOT NULL ,
        id_user  Int NOT NULL ,
        PRIMARY KEY (id_movie ,id_user )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: vid_user_serie
#------------------------------------------------------------

CREATE TABLE vid_user_serie(
        isFollowed Bool NOT NULL ,
        id_user    Int NOT NULL ,
        id_serie   Int NOT NULL ,
        PRIMARY KEY (id_user ,id_serie )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: vid_user_episode
#------------------------------------------------------------

CREATE TABLE vid_user_episode(
        isSeen     Bool NOT NULL ,
        id_serie   Int NOT NULL ,
        id_episode Int NOT NULL ,
        PRIMARY KEY (id_serie ,id_episode )
)ENGINE=InnoDB;

ALTER TABLE vid_episode ADD CONSTRAINT FK_vid_episode_id_serie FOREIGN KEY (id_serie) REFERENCES vid_serie(id_serie);
ALTER TABLE vid_movie_director ADD CONSTRAINT FK_vid_movie_director_id_movie FOREIGN KEY (id_movie) REFERENCES vid_movie(id_movie);
ALTER TABLE vid_movie_director ADD CONSTRAINT FK_vid_movie_director_id_director FOREIGN KEY (id_director) REFERENCES vid_director(id_director);
ALTER TABLE vid_serie_director ADD CONSTRAINT FK_vid_serie_director_id_director FOREIGN KEY (id_director) REFERENCES vid_director(id_director);
ALTER TABLE vid_serie_director ADD CONSTRAINT FK_vid_serie_director_id_serie FOREIGN KEY (id_serie) REFERENCES vid_serie(id_serie);
ALTER TABLE vid_movie_actor ADD CONSTRAINT FK_vid_movie_actor_id_movie FOREIGN KEY (id_movie) REFERENCES vid_movie(id_movie);
ALTER TABLE vid_movie_actor ADD CONSTRAINT FK_vid_movie_actor_id_actor FOREIGN KEY (id_actor) REFERENCES vid_actor(id_actor);
ALTER TABLE vid_serie_actor ADD CONSTRAINT FK_vid_serie_actor_id_serie FOREIGN KEY (id_serie) REFERENCES vid_serie(id_serie);
ALTER TABLE vid_serie_actor ADD CONSTRAINT FK_vid_serie_actor_id_actor FOREIGN KEY (id_actor) REFERENCES vid_actor(id_actor);
ALTER TABLE vid_user_movie ADD CONSTRAINT FK_vid_user_movie_id_movie FOREIGN KEY (id_movie) REFERENCES vid_movie(id_movie);
ALTER TABLE vid_user_movie ADD CONSTRAINT FK_vid_user_movie_id_user FOREIGN KEY (id_user) REFERENCES vid_user(id_user);
ALTER TABLE vid_user_serie ADD CONSTRAINT FK_vid_user_serie_id_user FOREIGN KEY (id_user) REFERENCES vid_user(id_user);
ALTER TABLE vid_user_serie ADD CONSTRAINT FK_vid_user_serie_id_serie FOREIGN KEY (id_serie) REFERENCES vid_serie(id_serie);
ALTER TABLE vid_user_episode ADD CONSTRAINT FK_vid_user_episode_id_serie FOREIGN KEY (id_serie) REFERENCES vid_serie(id_serie);
ALTER TABLE vid_user_episode ADD CONSTRAINT FK_vid_user_episode_id_episode FOREIGN KEY (id_episode) REFERENCES vid_episode(id_episode);
