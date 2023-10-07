package br.com.erudio.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.erudio.model.Book;

public interface BookRepository extends JpaRepository<Book,  Long>{
	
	
	@Query(value= """
			SELECT * FROM rest_with_spring_boot_erudio.books
			LIMIT 4
			""", nativeQuery = true)
	List<Book> findAllLimit();
	
}
