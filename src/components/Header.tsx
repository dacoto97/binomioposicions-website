import Container from "@/components/Container";
import type React from "react";

export default function Header() {
  return (
    <header>
      <div className="flex items-center gap-x-6 bg-gradient-to-r from-police from-10% via-30% to-50% to-firefighters text-white">
        <Container>
          <div className="flex justify-between items-center">
            <div>REDES</div>
            <div>CONTACTO</div>
          </div>
        </Container>
      </div>
      <Container>HEADER</Container>
    </header>
  );
}
