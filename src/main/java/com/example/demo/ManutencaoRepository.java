package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


//faz a condução DOS DADOS da tabela ao banco, serve para persistir os dados no banco
//para fazer os gets e posts vc precisa persistir
public interface ManutencaoRepository extends JpaRepository<ManutencaoTable, Long>{

	List<ManutencaoTable> findByNome(String nome);

	Optional<ManutencaoTable> findByNomeAndCategoria(String nome, String categoria);


}
