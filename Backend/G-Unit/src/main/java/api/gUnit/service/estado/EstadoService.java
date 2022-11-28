package api.gUnit.service.estado;

import api.gUnit.domain.estado.Estado;
import api.gUnit.repostory.EstadoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EstadoService implements IEstadoService {

    private final EstadoRepository estadoRepository;

    public EstadoService(EstadoRepository estadoRepository) {
        this.estadoRepository = estadoRepository;
    }


    @Override
    public List<Estado> buscar() {
        return estadoRepository.findAll();
    }
}

