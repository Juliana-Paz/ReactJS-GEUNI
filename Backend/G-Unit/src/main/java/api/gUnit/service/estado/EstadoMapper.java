package api.gUnit.service.estado;

import api.gUnit.domain.estado.Estado;
import api.gUnit.model.EstadoResponse;

import java.util.List;

public interface EstadoMapper {
    List<EstadoResponse> toEstadoResponseList(List<Estado> estado);
}
