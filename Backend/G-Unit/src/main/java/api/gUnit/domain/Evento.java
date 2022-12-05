package api.gUnit.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "EVENTO")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Evento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "NOME_EVENTO")
    private String nomeEvento;

    @Column(name = "DESCRICAO")
    private String descricao;

    @Column(name = "OBJETIVO")
    private String objetivo;

    @Column(name = "CERTIFICACAO")
    private String certificacao;

    @Column(name = "MODALIDADE")
    private String modalidade;
}
