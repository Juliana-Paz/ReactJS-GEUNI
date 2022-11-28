package api.gUnit.domain.estado;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "estado")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Estado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private String id;

    @Column
    private String nome;

    @Column
    private String sigla;
}
