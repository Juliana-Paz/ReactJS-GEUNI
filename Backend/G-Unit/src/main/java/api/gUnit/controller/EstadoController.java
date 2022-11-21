package api.gUnit.controller;

import api.gUnit.model.EstadoResponse;
import api.gUnit.service.estado.EstadoMapper;
import api.gUnit.service.estado.IEstadoService;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class EstadoController {

    private final IEstadoService estadoService;
    private final EstadoMapper estadoMapper;

    public EstadoController(IEstadoService estadoService, EstadoMapper estadoMapper) {
        this.estadoService = estadoService;
        this.estadoMapper = estadoMapper;
    }

    @GetMapping()
    @Procedure("buscar todos os estados")
    public List<EstadoResponse> buscar() {
        return estadoMapper.toEstadoResponseList(estadoService.buscar());
    }

}
