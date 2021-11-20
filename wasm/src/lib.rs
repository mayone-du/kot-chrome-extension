use wasm_bindgen::prelude::*;

/// 平日平均で何時間働いているかを返します。
///
/// * `work_day_count` - 平日働いた日数
/// * `work_time` - 実際に働いた時間
#[wasm_bindgen]
pub fn calc_avarage(work_day_count: u32, work_time: f32) -> f32 {
    let calced_avarage = (work_time / work_day_count as f32).round();
    calced_avarage
}
