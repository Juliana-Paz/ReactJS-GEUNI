package api.gUnit.domain;

import api.gUnit.UI.SexoEnum;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "SOLICITANTE")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Solicitante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "NOME")
    private String nome;

    @Column(name = "CPF")
    private String cpf;

    @Column(name = "SEXO")
    private SexoEnum sexo;

    @Column(name = "DATA_NASCIMENTO")
    private LocalDate dataNascimento;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "TELEFONE")
    private String telefone;

    @Column(name = "ENDERECO")
    private String endereco;

    @Column(name = "CIDADE")
    private String cidade;

    @Column(name = "CEP")
    private String cep;

}
