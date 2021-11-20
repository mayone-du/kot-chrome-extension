use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn calc_avarage(workTime: f32) {
    println!("avg: {}", workTime);
}
